import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  username = '';
  totalUsers = 124;
  pendingUsers = 6;
  managers = 8;
  accountants = 5;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.username = localStorage.getItem('username') || 'Admin';
  }

  goToPendingApprovals(): void {
    this.router.navigate(['/dashboard/admin/pending-approvals']);
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}