import { Injectable } from '@angular/core';
import { Observable ,of} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError,map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private getUrl = 'http://localhost:3000/about/1'; // GET
  private postUrl = 'http://localhost:3000/about/1'; // POST
 // private getUrl = 'https://jsonplaceholder.typicode.com/posts/7';
 // private postUrl = 'https://jsonplaceholder.typicode.com/posts';// Замінити на реальну адресу API
  constructor(private http: HttpClient) {}

  getAbout(): Observable<string> {
    return this.http.get<{ body: string }>(this.getUrl).pipe(
      map(res => res?.body || 'text not found'),      catchError(err => {
        console.error('GET error', err);
        return of('text not found');
      })
    );
  }

  sendAbout(newText: string): Observable<any> {
    return this.http.put(this.postUrl, { id: 1, body: newText });
  }

  sendContact(data: { phone: string; email: string; address: string }) {
    return this.http.post('http://localhost:3000/contacts', data);
  }

  getContactInfo(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/contacts');
  }

  deleteContact(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/contacts/${id}`);
  }

}
