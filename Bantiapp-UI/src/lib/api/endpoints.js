// src/lib/api/endpoints.js
export const authApi = {
  login: (credentials) => publicClient.post("/auth/login", credentials),
  register: (userData) => publicClient.post("/auth/register", userData),
  logout: () => privateClient.post("/auth/logout"),
  verifyEmail: (token) => publicClient.post("/auth/verify-email", { token }),
  forgotPassword: (email) =>
    publicClient.post("/auth/forgot-password", { email }),
  resetPassword: (token, password) =>
    publicClient.post("/auth/reset-password", { token, password }),
};

export const userApi = {
  getProfile: () => privateClient.get("/user/profile"),
  updateProfile: (data) => privateClient.patch("/user/profile", data),
  getNotifications: () => privateClient.get("/user/notifications"),
};
