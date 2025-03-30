import { Component } from '@angular/core';
import {NgFor, NgIf} from '@angular/common';
import {ReferenceSectionComponent} from './reference-section/reference-section.component';


@Component({
  selector: 'app-left-side-section',
  imports: [
    ReferenceSectionComponent,
    NgFor,
    NgIf],
  templateUrl: './left-side-section.component.html',
  standalone: true,
  styleUrl: './left-side-section.component.scss'
})
export class LeftSideSectionComponent {
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
}

