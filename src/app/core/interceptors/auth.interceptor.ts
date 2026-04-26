import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const token = localStorage.getItem('token');

    // Skip token for login/register APIs
    if (
      req.url.includes('/auth/login') ||
      req.url.includes('/auth/register')
    ) {
      return next.handle(req);
    }

    // Add JWT token if available
    if (token) {
      const clonedRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });

      console.log('JWT Added =>', clonedRequest);

      return next.handle(clonedRequest);
    }

    return next.handle(req);
  }
}