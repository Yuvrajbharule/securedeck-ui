import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { PendingApprovalsComponent } from './pages/pending-approvals/pending-approvals.component';
import { ManagerDashboardComponent } from './pages/manager-dashboard/manager-dashboard.component';
import { AccountantDashboardComponent } from './pages/accountant-dashboard/accountant-dashboard.component';

const routes: Routes = [
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'admin/pending-approvals', component: PendingApprovalsComponent },
  { path: 'manager', component: ManagerDashboardComponent },
  { path: 'accountant', component: AccountantDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }