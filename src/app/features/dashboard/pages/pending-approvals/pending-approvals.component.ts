import { Component, OnInit } from '@angular/core';
import { AdminApiService } from '../../services/admin-api.service';
import { PendingUser } from '../../models/admin.model';

@Component({
  selector: 'app-pending-approvals',
  templateUrl: './pending-approvals.component.html',
  styleUrls: ['./pending-approvals.component.css']
})
export class PendingApprovalsComponent implements OnInit {

  pendingUsers: PendingUser[] = [];
  loading = false;
  message = '';

  roles = [
    'ROLE_MANAGER',
    'ROLE_ACCOUNTANT',
    'ROLE_FIELD_OFFICER'
  ];

  constructor(private adminService: AdminApiService) {}

  ngOnInit(): void {
    this.loadPendingUsers();
  }

  loadPendingUsers(): void {

    this.loading = true;

    this.adminService.getPendingUsers().subscribe({
      next: (res) => {
        this.pendingUsers = res;
        this.loading = false;
      },
      error: (err) => {
        console.error('PENDING USERS ERROR =>', err);

        this.message =
          err?.error?.message ||
          err?.message ||
          'Failed to load users';

        this.loading = false;
      }
    });
  }

  approve(user: PendingUser, roleCode: string): void {

    if (!roleCode) {
      this.message = 'Please select role';
      return;
    }

    this.adminService
      .approveUser(user.id, roleCode)
      .subscribe({
        next: () => {
          this.message = 'User approved successfully';
          this.loadPendingUsers();
        },
        error: (err) => {
          console.error('APPROVE ERROR =>', err);

          this.message =
            err?.error?.message ||
            err?.message ||
            'Approval failed';
        }
      });
  }
}