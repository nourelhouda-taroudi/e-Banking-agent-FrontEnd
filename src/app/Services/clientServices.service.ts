import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Client } from 'src/app/Models/client';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ClientServicesService {

private apiServerURL = environment.apiBaseURL;
private loggedIn = new BehaviorSubject<boolean>(this.token.loggedIn());
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  auth_token=localStorage.getItem('token');

constructor(private http : HttpClient,private token : AuthService) { }
httpHeaders=new HttpHeaders({
  'content-type':'application/json',
  'Authorization':`Bearer ${this.auth_token}`
});
requestOptions= {headers:this.httpHeaders}

public getClients() : Observable<Client[]>{
  return this.http.get<Client[]>(`${this.apiServerURL}/client/getAll`,{headers:this.httpHeaders});
}

public getClientById(clientID : String) : Observable<Client>{
  return this.http.get<Client>(`${this.apiServerURL}/client/${clientID}`,{headers:this.httpHeaders});
}

public addClient(client : Client,idAgent: number) : Observable<Client>{
  return this.http.post<Client>(`${this.apiServerURL}/client/create/${idAgent}`,client,{headers:this.httpHeaders});
}

public updateClient(client : Client) : Observable<Client>{
  return this.http.put<Client>(`${this.apiServerURL}/client/updateClient/${client.id}`,client,{headers:this.httpHeaders});
}

public deleteClient(clientID : Number) : Observable<void> {
  return this.http.delete<void>(`${this.apiServerURL}/client/deleteClient/${clientID}`,{headers:this.httpHeaders});
}

}
