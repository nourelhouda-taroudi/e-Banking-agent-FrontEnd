import { Injectable } from '@angular/core';
import { Agent } from '../Models/agent';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  constructor() {}
  //Enregitrement du Token dans le local Storage
  set(data: { token: string; user: Agent }) {
    const { token,user } = data;
    localStorage.setItem('token', token);
    localStorage.setItem('username',user.username);
    localStorage.setItem('id',user.id+'');

  }
  setId(id: string) {
    localStorage.setItem('id', id);
  }

  handle(data: { token: string; user: Agent }) {
    this.set(data);
  }

  getToken() {
    return localStorage.getItem('token');
  }
  getUserId(){
    return localStorage.getItem('id');
  }
  getUsername() {
    return localStorage.getItem('username');
  }

  remove() {
    localStorage.removeItem('token');
  }

  //   decode(payload:any) {
  //     const data = jwt_decode(payload);
  //     return data
  //   }
  decode(payload: any) {
    return JSON.parse(atob(payload));
  }

  payload(token: string) {
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  isValid() {
    const token = this.getToken();

    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return payload.sub === 'agent';
      }
      return true;
    }
    return false;
  }

  getInfos() {
    const token = this.getToken();
    if (token) {
      const payload = this.payload(token);
      return payload ? payload : null;
    }
    return null;
  }

  loggedIn() {
    return this.isValid();
  }
}
