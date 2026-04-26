import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {
  LoginRequest,
  RegisterRequest,
  AuthResponse,
  ApiResponse
} from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  private baseUrl = 'http://localhost:8080/api/v1/auth';

  constructor(private http: HttpClient) {}

  login(data: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      `${this.baseUrl}/login`,
      data
    );
  }

  register(data: RegisterRequest): Observable<ApiResponse<any>> {
    return this.http.post<ApiResponse<any>>(
      `${this.baseUrl}/register`,
      data
    );
  }
}