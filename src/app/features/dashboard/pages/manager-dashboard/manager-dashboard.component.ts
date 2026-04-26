import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.css']
})
export class ManagerDashboardComponent {

    username = localStorage.getItem('username');
    role = localStorage.getItem('role');
  
    constructor(private router: Router) {}
  
    logout() {
      localStorage.clear();
      this.router.navigate(['/login']);
    }

}
