import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {

    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    // Not logged in
    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }

    const url = state.url;

    // Admin route
    if (url.startsWith('/dashboard/admin')
        && role === 'ROLE_ADMIN') {
      return true;
    }

    // Manager route
    if (url.startsWith('/dashboard/manager')
        && role === 'ROLE_MANAGER') {
      return true;
    }

    // Accountant route
    if (url.startsWith('/dashboard/accountant')
        && role === 'ROLE_ACCOUNTANT') {
      return true;
    }

    // Unauthorized
    this.router.navigate(['/login']);
    return false;
  }
}