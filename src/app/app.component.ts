import { Component } from '@angular/core';
import {LeftSideSectionComponent} from './left-side-section/left-side-section.component';
import {PhotoAndAboutComponent} from './photo-and-about/photo-and-about.component';
import {RightSideSectionComponent} from './right-side-section/right-side-section.component';
import { LoginComponent } from './auth/login.component';
import { RegisterComponent } from './auth/register.component';
import { CommonModule } from '@angular/common';
import {Router, RouterLink} from '@angular/router';

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
    RouterLink
  ],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isAuthenticated = false;

  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('auth');
  }

  // logout() {
  //   localStorage.removeItem('auth');
  //   this.authState = false;
  //   this.router.navigate(['/']);
  // }

  // ngOnInit() {
  //   const auth = localStorage.getItem('auth');
  //   this.isAuthenticated = auth === 'true';
  // }

  constructor(private router: Router) {}
  ngOnInit() {
    const auth = localStorage.getItem('auth') === 'true';
    this.isAuthenticated = auth;

    if (auth) {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  onLoginSuccess() {
    this.isAuthenticated = true;
    //this.authState = true;
    this.closeModals();
  }

  closeModals() {
    this.showLogin = false;
    this.showRegister = false;
  }
  showLogin = false;
  showRegister = false;

  authState = false;

}
