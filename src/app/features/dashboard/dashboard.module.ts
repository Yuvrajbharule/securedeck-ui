import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';

import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { PendingApprovalsComponent } from './pages/pending-approvals/pending-approvals.component';
import { ManagerDashboardComponent } from './pages/manager-dashboard/manager-dashboard.component';
import { AccountantDashboardComponent } from './pages/accountant-dashboard/accountant-dashboard.component';

@NgModule({
  declarations: [
    DashboardLayoutComponent,
    SidebarComponent,
    TopNavbarComponent,
    AdminDashboardComponent,
    PendingApprovalsComponent,
    ManagerDashboardComponent,
    AccountantDashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }