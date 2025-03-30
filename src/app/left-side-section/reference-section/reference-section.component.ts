import { Component ,Input} from '@angular/core';

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
  @Input() name2!: string;
  @Input() title2!: string;
  @Input() phone2!: string;
}
