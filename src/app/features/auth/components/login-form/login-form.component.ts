import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthApiService } from '../../service/auth-api.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  loginRequest = {
    usernameOrEmail: '',
    password: ''
  };

  loading = false;
  errorMessage = '';

  constructor(
    private authService: AuthApiService,
    private router: Router
  ) {}

  onSubmit(): void {

    this.errorMessage = '';
    this.loading = true;

    this.authService.login(this.loginRequest).subscribe({

      next: (res: any) => {
        this.loading = false;

        console.log('FULL LOGIN RESPONSE =>', res);

        // Handle wrapped or direct response
        const data = res?.data ? res.data : res;

        console.log('LOGIN DATA =>', data);

        const token = data?.token || '';
        const username = data?.username || '';
        let role = data?.role || '';

        console.log('TOKEN =>', token);
        console.log('USERNAME =>', username);
        console.log('ROLE BEFORE NORMALIZE =>', role);

        // Validate response
        if (!role) {
          this.errorMessage = 'Role not received from server';
          return;
        }

        // Normalize role
        role = role.toString().trim().toUpperCase();

        if (!role.startsWith('ROLE_')) {
          role = 'ROLE_' + role;
        }

        console.log('ROLE AFTER NORMALIZE =>', role);

        // Save session
        localStorage.setItem('token', token);
        localStorage.setItem('username', username);
        localStorage.setItem('role', role);

        console.log('TOKEN SAVED IN LOCALSTORAGE');

        // Navigate by role
        switch (role) {

          case 'ROLE_ADMIN':
            console.log('Redirecting to Admin Dashboard');
            this.router.navigate(['/dashboard/admin']);
            return;

          case 'ROLE_MANAGER':
            console.log('Redirecting to Manager Dashboard');
            this.router.navigate(['/dashboard/manager']);
            return;

          case 'ROLE_ACCOUNTANT':
            console.log('Redirecting to Accountant Dashboard');
            this.router.navigate(['/dashboard/accountant']);
            return;

          case 'ROLE_PENDING':
            this.errorMessage = 'Your account is pending approval';
            return;

          case 'ROLE_FIELD_OFFICER':
            this.errorMessage = 'Field Officer dashboard not created yet';
            return;

          default:
            this.errorMessage = 'Role not authorized: ' + role;
            return;
        }
      },

      error: (err: any) => {
        this.loading = false;

        console.error('LOGIN ERROR =>', err);

        this.errorMessage =
          err?.error?.message ||
          err?.message ||
          'Login failed';
      }

    });
  }
}