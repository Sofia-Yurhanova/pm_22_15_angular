import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import * as stream from 'node:stream';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'John Parker';
profile_picture: string ='/img/photo_web.jpg';
}
