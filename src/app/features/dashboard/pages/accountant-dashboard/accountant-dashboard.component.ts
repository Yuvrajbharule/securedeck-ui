import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accountant-dashboard',
  templateUrl: './accountant-dashboard.component.html',
  styleUrls: ['./accountant-dashboard.component.css']
})
export class AccountantDashboardComponent {
    username = localStorage.getItem('username');
    role = localStorage.getItem('role');
  
    constructor(private router: Router) {}
  
    logout() {
      localStorage.clear();
      this.router.navigate(['/login']);
    }
}
