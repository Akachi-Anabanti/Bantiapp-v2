import { privateClient, publicClient } from "@/lib/api/axios";
import {
  User,
  Post,
  Comment,
  Notification,
  Message,
  ChatRoom,
  PaginatedResponse,
  AuthResponse,
} from "@/types/api";

export const authApi = {
  login: (email: string, password: string) =>
    publicClient.post<AuthResponse>("/auth/login", { email, password }),
  register: (username: string, email: string, password: string) =>
    publicClient.post<AuthResponse>("/auth/register", {
      username,
      email,
      password,
    }),
  logout: () => privateClient.post("/auth/logout"),
  refresh: () => publicClient.post<AuthResponse>("/auth/refresh"),
};

export const userApi = {
  getProfile: (username: string) =>
    privateClient.get<User>(`/users/${username}`),
  updateProfile: (data: Partial<User>) =>
    privateClient.patch<User>("/users/profile", data),
  getFollowers: (username: string, page = 1) =>
    privateClient.get<PaginatedResponse<User>>(`/users/${username}/followers`, {
      params: { page },
    }),
  getFollowing: (username: string, page = 1) =>
    privateClient.get<PaginatedResponse<User>>(`/users/${username}/following`, {
      params: { page },
    }),
  follow: (username: string) =>
    privateClient.post<void>(`/users/${username}/follow`),
  unfollow: (username: string) =>
    privateClient.delete<void>(`/users/${username}/follow`),
};

export const postApi = {
  getFeed: (page = 1) =>
    privateClient.get<PaginatedResponse<Post>>("/posts/feed", {
      params: { page },
    }),
  getProfilePosts: (username: string, page = 1) =>
    privateClient.get<PaginatedResponse<Post>>(`/users/${username}/posts`, {
      params: { page },
    }),
  createPost: (content: string, media?: File[]) => {
    const formData = new FormData();
    formData.append("content", content);
    media?.forEach((file) => formData.append("media", file));
    return privateClient.post<Post>("/posts", formData);
  },
  deletePost: (postId: string) =>
    privateClient.delete<void>(`/posts/${postId}`),
  likePost: (postId: string) =>
    privateClient.post<void>(`/posts/${postId}/like`),
  unlikePost: (postId: string) =>
    privateClient.delete<void>(`/posts/${postId}/like`),
};

export const commentApi = {
  getPostComments: (postId: string, page = 1) =>
    privateClient.get<PaginatedResponse<Comment>>(`/posts/${postId}/comments`, {
      params: { page },
    }),
  createComment: (postId: string, content: string) =>
    privateClient.post<Comment>(`/posts/${postId}/comments`, { content }),
  deleteComment: (postId: string, commentId: string) =>
    privateClient.delete<void>(`/posts/${postId}/comments/${commentId}`),
  likeComment: (commentId: string) =>
    privateClient.post<void>(`/comments/${commentId}/like`),
  unlikeComment: (commentId: string) =>
    privateClient.delete<void>(`/comments/${commentId}/like`),
};

export const notificationApi = {
  getNotifications: (page = 1) =>
    privateClient.get<PaginatedResponse<Notification>>("/notifications", {
      params: { page },
    }),
  markAsRead: (notificationId: string) =>
    privateClient.patch<void>(`/notifications/${notificationId}/read`),
  markAllAsRead: () => privateClient.patch<void>("/notifications/read-all"),
};

export const messageApi = {
  getChatRooms: () => privateClient.get<ChatRoom[]>("/messages/rooms"),
  getChatMessages: (roomId: string, page = 1) =>
    privateClient.get<PaginatedResponse<Message>>(`/messages/rooms/${roomId}`, {
      params: { page },
    }),
  sendMessage: (roomId: string, content: string) =>
    privateClient.post<Message>(`/messages/rooms/${roomId}`, { content }),
  createChatRoom: (userId: string) =>
    privateClient.post<ChatRoom>("/messages/rooms", { userId }),
};
