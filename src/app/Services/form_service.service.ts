import { Injectable } from '@angular/core';
import { Client } from '../Models/client';

@Injectable({
  providedIn: 'root'
})
//ce service permet de passer des parametres d'un composant vers un autre
export class Form_serviceService {

constructor() { }

private c : Client = new Client();

setClient(client : Client){
  this.c = client;
}

getClient():Client{
  return this.c;
}

}
