export interface ApiError {
  message: string;
  code: string;
  status: number;
  erros?: Record<string, string[]>;
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  };
}

export interface User {
  id: string;
  email: string;
  name: string;
  roles: string[];
  type: "customer" | "store_owner" | "admin";
}

export interface AuthResponse {
  user: User;
  accessToken: string;
}
