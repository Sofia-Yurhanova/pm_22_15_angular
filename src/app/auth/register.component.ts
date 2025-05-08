import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="custom-wall">
      <h2 class="custom-title">Register</h2>
      <form (ngSubmit)="register()">
        <label>Name:</label>
        <input type="text" [(ngModel)]="username" name="username" required>
        <label>Password:</label>
        <input type="password" [(ngModel)]="password" name="password" required>
        <button type="submit" class="custom-btn">Okey</button>
      </form>
    </div>
  `,
  styleUrls: ['./log-reg.component.scss']
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
      alert('Register is successfull');
      this.registerSuccess.emit();
    } else {
      alert('Fill in all fields');
    }
  }
}
