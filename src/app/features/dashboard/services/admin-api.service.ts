import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PendingUser } from '../models/admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminApiService {

  private baseUrl = 'http://localhost:8080/api/v1/admin';

  constructor(private http: HttpClient) {}

  getPendingUsers(): Observable<PendingUser[]> {
    return this.http.get<PendingUser[]>(
      `${this.baseUrl}/pending-users`
    );
  }

  approveUser(
    userId: number,
    roleCode: string
  ): Observable<any> {

    return this.http.put(
      `${this.baseUrl}/approve/${userId}`,
      { roleCode }
    );
  }
}