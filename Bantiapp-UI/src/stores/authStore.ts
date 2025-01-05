// stores/authStore.ts
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { authApi } from "@/services/api";
import { User } from "@/types/api";
import { ApiErrorHandler } from "@/lib/api/error-handler";

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterCredentials {
  username: string;
  email: string;
  password: string;
}

interface AuthState {
  user: User | null;
  accessToken: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (credentials: RegisterCredentials) => Promise<void>;
  logout: () => Promise<void>;
  setAccessToken: (token: string) => void;
  updateUser: (user: Partial<User>) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      accessToken: null,
      isLoading: false,
      isAuthenticated: false,

      setAccessToken: (token: string) => {
        set({ accessToken: token });
      },

      updateUser: (userData: Partial<User>) => {
        const currentUser = get().user;
        if (currentUser) {
          set({ user: { ...currentUser, ...userData } });
        }
      },

      login: async (credentials: LoginCredentials) => {
        try {
          set({ isLoading: true });
          const { data } = await authApi.login(
            credentials.email,
            credentials.password
          );
          set({
            user: data.user,
            accessToken: data.accessToken,
            isAuthenticated: true,
          });
        } catch (error) {
          ApiErrorHandler.handle(error);
          throw error;
        } finally {
          set({ isLoading: false });
        }
      },

      register: async (credentials: RegisterCredentials) => {
        try {
          set({ isLoading: true });
          const { data } = await authApi.register(
            credentials.username,
            credentials.email,
            credentials.password
          );
          set({
            user: data.user,
            accessToken: data.accessToken,
            isAuthenticated: true,
          });
        } catch (error) {
          ApiErrorHandler.handle(error);
          throw error;
        } finally {
          set({ isLoading: false });
        }
      },

      logout: async () => {
        try {
          set({ isLoading: true });
          await authApi.logout();
        } catch (error) {
          ApiErrorHandler.handle(error);
        } finally {
          // Clear the store regardless of logout API success/failure
          set({
            user: null,
            accessToken: null,
            isAuthenticated: false,
            isLoading: false,
          });
        }
      },
    }),
    {
      name: "auth-storage", // name of the item in localStorage
      storage: createJSONStorage(() => localStorage), // use localStorage
      partialize: (state) => ({
        // only persist these fields
        user: state.user,
        accessToken: state.accessToken,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);

// Optional: Create hooks for common auth operations
export const useAuth = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const user = useAuthStore((state) => state.user);
  const isLoading = useAuthStore((state) => state.isLoading);
  return { isAuthenticated, user, isLoading };
};

export const useAuthActions = () => {
  const login = useAuthStore((state) => state.login);
  const register = useAuthStore((state) => state.register);
  const logout = useAuthStore((state) => state.logout);
  const updateUser = useAuthStore((state) => state.updateUser);
  return { login, register, logout, updateUser };
};
