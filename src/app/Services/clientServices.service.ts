import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from 'src/app/Models/client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientServicesService {

private apiServerURL = environment.apiBaseURL;

constructor(private http : HttpClient) { }

public getClients() : Observable<Client[]>{
  return this.http.get<Client[]>(`${this.apiServerURL}/client/getAll`);
}

public getClientById(clientID : String) : Observable<Client>{
  return this.http.get<Client>(`${this.apiServerURL}/client/${clientID}`);
}

public addClient(client : Client) : Observable<Client>{
  return this.http.post<Client>(`${this.apiServerURL}/client/create`,client);
}

public updateClient(client : Client) : Observable<Client>{
  return this.http.put<Client>(`${this.apiServerURL}/client/updateClient/${client.id}`,client);
}

public deleteClient(clientID : Number) : Observable<void> {
  return this.http.delete<void>(`${this.apiServerURL}/client/deleteClient/${clientID}`);
}

}
