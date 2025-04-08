import { Component } from '@angular/core';
import {LeftSideSectionComponent} from './left-side-section/left-side-section.component';
import {PhotoAndAboutComponent} from './photo-and-about/photo-and-about.component';
import {RightSideSectionComponent} from './right-side-section/right-side-section.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports:[
    LeftSideSectionComponent,
    PhotoAndAboutComponent,
    RightSideSectionComponent
  ],
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
