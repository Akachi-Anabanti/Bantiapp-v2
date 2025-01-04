import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { useAuthStore } from "@stores/authStore";
import { ApiError, AuthResponse } from "@/types/api";

const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api/";

export const publicClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const privateClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

interface RetryConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

type RefreshSubscriber = (token: string) => void;

export class ApiClient {
  private static instance: ApiClient;
  private isRefreshing = false;
  private refreshSubscribers: RefreshSubscriber[] = [];

  private constructor() {
    this.setupInterceptors();
  }

  static getInstance(): ApiClient {
    if (!this.instance) {
      this.instance = new ApiClient();
    }
    return this.instance;
  }

  private async refreshAccessToken(): Promise<string> {
    try {
      const { data } = await publicClient.post<AuthResponse>("/auth/refresh");
      useAuthStore.getState().setAccessToken(data.accessToken);
      return data.accessToken;
    } catch (error) {
      useAuthStore.getState().logout();
      throw error;
    }
  }

  private setupInterceptors(): void {
    privateClient.interceptors.request.use(
      (config) => {
        const token = useAuthStore.getState().accessToken;
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    privateClient.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        const originalRequest = error.config as RetryConfig;

        if (error.response?.status !== 401 || originalRequest._retry) {
          return Promise.reject(error);
        }

        if (this.isRefreshing) {
          return new Promise<string>((resolve) => {
            this.refreshSubscribers.push((token: string) => {
              if (originalRequest.headers) {
                originalRequest.headers.Authorization = `Bearer ${token}`;
              }
              resolve(privateClient(originalRequest));
            });
          });
        }

        originalRequest._retry = true;
        this.isRefreshing = true;

        try {
          const newToken = await this.refreshAccessToken();
          if (originalRequest.headers) {
            originalRequest.headers.Authorization = `Bearer ${newToken}`;
          }
          this.refreshSubscribers.forEach((cb) => cb(newToken));
          this.refreshSubscribers = [];
          return privateClient(originalRequest);
        } catch (refreshError) {
          return Promise.reject(refreshError);
        } finally {
          this.isRefreshing = false;
        }
      }
    );
  }
}
