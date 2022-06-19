import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = environment.apiBaseURL + '/api/auth/';
  constructor(private readonly http: HttpClient) {}
  login(payload: {username:string, password:string}): Observable<any> {
    return this.http.post<any>(this.url + 'signin', payload);
  }
}
