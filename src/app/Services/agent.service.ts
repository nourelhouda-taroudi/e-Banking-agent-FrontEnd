import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Agent } from '../Models/agent';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AgentService {
    url = environment.apiBaseURL;
    public agent : Agent=new Agent();
    private loggedIn = new BehaviorSubject<boolean>(this.token.loggedIn());
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  auth_token=localStorage.getItem('token');
    constructor(
        private http: HttpClient,private token : AuthService
    ) { }
    httpHeaders=new HttpHeaders({
      'content-type':'application/json',
      'Authorization':`Bearer ${this.auth_token}`
    });
    requestOptions= {headers:this.httpHeaders}
    
    getId():Agent{
      return this.agent;
    }
    setId(ag:Agent){
      this.agent=ag;
    }
    getAgentById(id: Number): Observable<Agent> {
      return this.http.get<Agent>(`http://localhost:8090/agent/find/${id}`,{headers:this.httpHeaders});
    }
    public changePassword(id:number,password: any){
      return this.http.put(`http://localhost:8090/client/${id}/password`,password,{headers  : this.httpHeaders});
    } 
}