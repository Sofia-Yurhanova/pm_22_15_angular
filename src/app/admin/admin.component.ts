import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  template: `
<p>All users:</p>
<ul>
<li *ngFor="let user of users">
  {{ user.username }} {{ user.role }}
<button (click)="deleteUser(user.username)" class="custom-btn">Delete</button>
</li>
</ul>
  `,
  styles:'.custom-btn {\n'+
'  background-color: darkslategray;\n'+
'  color: white;\n'+
'  border: none;\n'+
'  padding: 10px 20px;\n'+
'  font-size: 16px;\n'+
'  cursor: pointer;\n'+
'}'
})
export class AdminComponent implements OnInit {
  users: any[] = [];
  username = '';
  role = '';

  ngOnInit(): void {
    // Забираємо логін користувача з localStorage
    // const users = JSON.parse(localStorage.getItem('users') || '[]');
    // const role = localStorage.getItem('role');
    // const foundUser = users.find((u: any) => u.role === role);
    // this.username = foundUser?.username || 'admin';
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    this.users = users;

    const username = localStorage.getItem('username');
    this.username = username || 'admin';
  }

  deleteUser(usernameToDelete: string) {
    //if (usernameToDelete === 'admin') return alert("Can't delete admin");
    if (usernameToDelete.toLowerCase() === 'admin') {
      alert("Can't delete admin");
      return;
    }
    const confirmed = confirm(`Ви впевнені, що хочете видалити користувача ${usernameToDelete}?`);
    if (!confirmed) return;

    this.users = this.users.filter(u => u.username !== usernameToDelete);
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('auth');
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }

}
