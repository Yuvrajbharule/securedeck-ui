import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent {

  username = localStorage.getItem('username') || 'User';
  darkMode = false;

  constructor(private router: Router) {}

  toggleTheme(): void {
    this.darkMode = !this.darkMode;

    document.body.classList.toggle('dark-theme', this.darkMode);

    localStorage.setItem(
      'theme',
      this.darkMode ? 'dark' : 'light'
    );
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
      this.darkMode = true;
      document.body.classList.add('dark-theme');
    }
  }
}