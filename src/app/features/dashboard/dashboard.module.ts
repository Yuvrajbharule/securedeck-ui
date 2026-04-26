import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { PendingApprovalsComponent } from './pages/pending-approvals/pending-approvals.component';


@NgModule({
  declarations: [
    PendingApprovalsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
