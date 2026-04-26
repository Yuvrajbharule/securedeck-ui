export interface LoginRequest {
  usernameOrEmail: string;
  password: string;
}

export interface RegisterRequest {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  mobile: string;
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