import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../resume.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-photo-and-about',
  templateUrl: './photo-and-about.component.html',
  standalone: true,
  styleUrls: ['./photo-and-about.component.scss'],
  imports: [FormsModule]
})
export class PhotoAndAboutComponent implements OnInit{
  aboutText: string = '';
  newAbout: string = '';

  constructor(private resumeService: ResumeService) {}

  ngOnInit() {
    this.resumeService.getAbout().subscribe({
      next: (text: string) => this.aboutText = text,
      error: (err: any) => {
        console.error(err);
        this.aboutText = 'Error download text';
      }
    });
  }
  // ngOnInit() {
  //   this.resumeService.getAbout().subscribe({
  //     next: (text: string) => {
  //       console.log('Завантажено текст:', text);
  //       this.aboutText = text;
  //     },
  //     error: (err: any) => {
  //       console.error('Помилка GET:', err);
  //       this.aboutText = 'Error download text';
  //     }
  //   });
  // }


  sendNewText() {
    if (!this.newAbout.trim()) return;
    console.log('Text was sending:', this.newAbout);
    this.resumeService.sendAbout(this.newAbout).subscribe({
      next: () => {
        this.aboutText = this.newAbout;
        this.newAbout = '';
      },
      error: (err) => {
        console.error('POST error', err);
        alert('Error in saving ❌');
      }
    });
  }
}

