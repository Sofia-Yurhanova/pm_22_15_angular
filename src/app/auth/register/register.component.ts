import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-register',
  standalone: true,
  imports: [FormsModule],
  // template: `
  //   <h2>Register</h2>
  //   <input [(ngModel)]="username" placeholder="Name">
  //   <input [(ngModel)]="password" type="password" placeholder="Password">
  //   <button (click)="register()">Register now</button>
  // `
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  username = '';
  password = '';

  @Output() registerSuccess = new EventEmitter<void>();

  constructor(private router: Router) {}

  register() {
    if (this.username && this.password) {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      users.push({ username: this.username, password: this.password });
      localStorage.setItem('users', JSON.stringify(users));
      alert('Реєстрація успішна');
      this.registerSuccess.emit();
    } else {
      alert('Заповніть всі поля');
    }
  }
}
