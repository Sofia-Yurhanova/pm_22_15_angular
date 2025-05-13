import { Component } from '@angular/core';
import {LeftSideSectionComponent} from './left-side-section/left-side-section.component';
import {PhotoAndAboutComponent} from './photo-and-about/photo-and-about.component';
import {RightSideSectionComponent} from './right-side-section/right-side-section.component';
import { LoginComponent } from './auth/login.component';
import { RegisterComponent } from './auth/register.component';
import { CommonModule } from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {AdminComponent} from './admin/admin.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    CommonModule,
    LeftSideSectionComponent,
    PhotoAndAboutComponent,
    RightSideSectionComponent,
    LoginComponent,
    RegisterComponent,
    RouterLink,
    AdminComponent
  ],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isAuthenticated = false;
  username = '';
  role = '';
  showLogin = false;
  showRegister = false;
  authState = false;

  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('auth');
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }

  constructor(private router: Router) {}

  ngOnInit() {
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const hasAdmin = storedUsers.some((u: any) => u.username === 'admin');

    if (!hasAdmin) {
      storedUsers.push({ username: 'admin', password: '1234', role: 'admin' });
      localStorage.setItem('users', JSON.stringify(storedUsers));
    }

    const auth = localStorage.getItem('auth') === 'true';
    this.isAuthenticated = auth;
    this.username = localStorage.getItem('username') || '';
    this.role = localStorage.getItem('role') || '';

    if (auth) {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  onLoginSuccess() {
    this.isAuthenticated = true;
    this.role = localStorage.getItem('role') || '';
    this.username = localStorage.getItem('username') || '';
    this.closeModals();
  }

  closeModals() {
    this.showLogin = false;
    this.showRegister = false;
  }

}
