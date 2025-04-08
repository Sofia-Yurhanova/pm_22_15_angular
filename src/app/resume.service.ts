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
 // private getUrl = 'https://jsonplaceholder.typicode.com/posts/7';
 // private postUrl = 'https://jsonplaceholder.typicode.com/posts';// Замінити на реальну адресу API
  constructor(private http: HttpClient) {}

  getAbout(): Observable<string> {
    return this.http.get<{ body: string }>(this.getUrl).pipe(
      map(res => res.body),
      catchError(err => {
        console.error('GET error', err);
        return of('text not found');
      })
    );
  }

  sendAbout(newText: string): Observable<any> {
    return this.http.patch(this.postUrl, { body: newText });
  }
}
