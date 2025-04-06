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
      next: (data:any) => this.aboutText = data.body,
      error: (err:any) => console.error(err)
    });
  }

  sendNewText() {
    if (!this.newAbout.trim()) return;
    this.resumeService.sendAbout(this.newAbout).subscribe({
      next: () => {
        this.aboutText = this.newAbout;
        this.newAbout = '';
      }
    });
  }


  // ngOnInit() {
  //   this.ResumeService.getAboutText().subscribe({
  //     next: (text:any) => this.aboutText = text,
  //     error: (err:any) => {
  //       console.error(err);
  //       this.aboutText = 'Помилка завантаження тексту';
  //     }
  //   });
  // }
}

