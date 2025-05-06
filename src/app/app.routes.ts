import { Routes } from '@angular/router';
import { PhotoAndAboutComponent } from './photo-and-about/photo-and-about.component';
import { LeftSideSectionComponent } from './left-side-section/left-side-section.component';
import { RightSideSectionComponent } from './right-side-section/right-side-section.component';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: PhotoAndAboutComponent },
  { path: 'left', component: LeftSideSectionComponent },
  { path: 'right', component: RightSideSectionComponent },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard] // захищено
  },
  { path: 'login',
    loadComponent: () => import('./auth/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./auth/register/register.component').then(m => m.RegisterComponent)
  }
];
