import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './features/auth/pages/login/login.component';
import { RegisterComponent } from './features/auth/pages/register/register.component';

import { AdminDashboardComponent } from './features/dashboard/pages/admin-dashboard/admin-dashboard.component';
import { ManagerDashboardComponent } from './features/dashboard/pages/manager-dashboard/manager-dashboard.component';
import { AccountantDashboardComponent } from './features/dashboard/pages/accountant-dashboard/accountant-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'dashboard/admin', component: AdminDashboardComponent },
  { path: 'dashboard/manager', component: ManagerDashboardComponent },
  { path: 'dashboard/accountant', component: AccountantDashboardComponent },

  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}