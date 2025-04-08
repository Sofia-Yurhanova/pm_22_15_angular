import { Injectable } from '@angular/core';
import { Observable ,of} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError,map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private getUrl = 'http://localhost:3000/about'; // GET
  private postUrl = 'http://localhost:3000/about'; // POST

  constructor(private http: HttpClient) {}

  // getAbout(): Observable<{ body: string }> {
  //   return this.http.get<{ body: string }>(this.getUrl);
  // }
  getAbout(): Observable<string> {
    return this.http.get<{ body: string }>(this.getUrl).pipe(
      map(res => res.body),
      catchError(err => {
        console.error('GET error', err);
        return of('text not found');      })
    );
  }

  sendAbout(newText: string): Observable<any> {
    return this.http.patch(this.postUrl, { body: newText });
  }

  // private apiUrl = 'https://jsonplaceholder.typicode.com/posts/4';
  // private postUrl = 'https://jsonplaceholder.typicode.com/posts';// Замінити на реальну адресу API
  //
  // constructor(private http: HttpClient) {}
  //
  // getAboutMe(): Observable<{ body: string }> {
  //   return this.http.get<{ body: string }>(this.apiUrl).pipe(
  //     catchError(this.handleError)
  //   );
  // }
  //
  // sendAboutMe(newText: string): Observable<any> {
  //   const body = { title: 'About Me', body: newText };
  //   return this.http.post<any>(this.postUrl, body).pipe(
  //     catchError(this.handleError)
  //   );
  // }
  // getAboutText(): Observable<string> {
  //   return this.http.get<any>(this.apiUrl).pipe(
  //     map(response => response.body || 'Дані не знайдено') // API повертає об'єкт, тому беремо body
  //   );
  // }
  // // Виконуємо GET-запит для отримання даних
  // getResumeData(): Observable<any> {
  //   return this.http.get<any>(this.apiUrl);
  //
  // }

  // Виконуємо POST-запит для надсилання даних
  // sendResumeData(data: any): Observable<any> {
  //   return this.http.post<any>(this.apiUrl, data);
  // }
}
