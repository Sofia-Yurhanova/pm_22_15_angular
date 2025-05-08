import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {NgFor, NgIf} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { ResumeService } from '../resume.service';
import {ReferenceSectionComponent} from './reference-section/reference-section.component';
import { OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from '../auth/register.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../auth/login.component';

@Component({
  selector: 'app-left-side-section',
  imports: [
    RouterModule,
    ReferenceSectionComponent,
    CommonModule,
    RegisterComponent,
    LoginComponent,
    NgFor,
    NgIf,
    FormsModule
  ],
  templateUrl: './left-side-section.component.html',
  standalone: true,
  styleUrl: './left-side-section.component.scss'
})
export class LeftSideSectionComponent implements OnInit{
  //директиви *ngIf
  showContact = true;

  toggleContact() {
    this.showContact = !this.showContact;
  }
//директиви *ngFor
  education = [
    { year: '2005-2007', degree: 'Degree / Major Name', institution: 'Your College name here' },
    { year: '2008-2010', degree: 'Degree / Major Name', institution: 'Another College' }
  ];

  //Output
  reference2 = {
    name: 'Jane Anderson',
    title: 'Company name / Title',
    phone: '0987 654 3210'
  };

  contacts: any[] = [];

  handleUpdatedReference(data: { name: string; title: string; phone: string }) {
    this.reference2 = data;
  }

//NgForm
  constructor(
    private resumeService: ResumeService,
    private router: Router) {
    this.loadContacts();
  }


  loadContacts() {
    this.resumeService.getContactInfo().subscribe(data => {
      this.contacts = data;
    });
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.resumeService.sendContact(form.value).subscribe({
        next: () => {
          alert('Дані надіслано успішно');
          form.resetForm();
          this.loadContacts();
        },
        error: () => {
          alert('Помилка при надсиланні');
        }
      });
    }
  }

  deleteContact(id: number) {
    this.resumeService.deleteContact(id).subscribe(() => {
      this.contacts = this.contacts.filter(c => c.id !== id);
    });
  }

  authState = false;

  ngOnInit() {
    this.authState = localStorage.getItem('auth') === 'true';
  }

}

