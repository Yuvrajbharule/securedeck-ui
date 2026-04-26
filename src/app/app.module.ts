import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginFormComponent } from './features/auth/components/login-form/login-form.component';
import { RegisterFormComponent } from './features/auth/components/register-form/register-form.component';
import { AuthCardComponent } from './features/auth/components/auth-card/auth-card.component';
import { AuthHeaderComponent } from './features/auth/components/auth-header/auth-header.component';
import { PasswordFieldComponent } from './features/auth/components/password-field/password-field.component';
import { AuthLoaderComponent } from './features/auth/components/auth-loader/auth-loader.component';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';

import { LoginComponent } from './features/auth/pages/login/login.component';
import { RegisterComponent } from './features/auth/pages/register/register.component';
import { AdminDashboardComponent } from './features/dashboard/pages/admin-dashboard/admin-dashboard.component';
import { ManagerDashboardComponent } from './features/dashboard/pages/manager-dashboard/manager-dashboard.component';
import { AccountantDashboardComponent } from './features/dashboard/pages/accountant-dashboard/accountant-dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegisterFormComponent,
    AuthCardComponent,
    AuthHeaderComponent,
    PasswordFieldComponent,
    AuthLoaderComponent,
    LoginComponent,
    RegisterComponent,
    AdminDashboardComponent,
    ManagerDashboardComponent,
    AccountantDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }