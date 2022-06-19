import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgentService {
    url = environment.apiBaseURL;
    constructor(
        private http: HttpClient
    ) { }
}