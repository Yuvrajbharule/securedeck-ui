export interface LoginRequest {
  usernameOrEmail: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  username: string;
  roles: string[];
}


export interface ApiResponse<T> {
  status: number;
  message: string;
  data: T;
  timestamp: string;
}