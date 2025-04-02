import { Component ,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reference-section',
  imports: [],
  standalone: true,
  templateUrl: './reference-section.component.html',
  styleUrl: './reference-section.component.scss'
})
export class ReferenceSectionComponent {
  @Input() name1!: string;
  @Input() title1!: string;
  @Input() phone1!: string;

  @Output() updateReference = new EventEmitter<{ name: string; title: string; phone: string }>();

  sendUpdatedReference() {
    this.updateReference.emit({ name: this.name1, title: this.title1, phone: this.phone1 });
  }

}
