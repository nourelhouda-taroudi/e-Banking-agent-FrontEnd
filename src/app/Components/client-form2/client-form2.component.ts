import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Client } from 'src/app/Models/client';
import { Form_serviceService } from 'src/app/Services/form_service.service';
import { ClientServicesService } from 'src/app/Services/clientServices.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-client-form2',
  templateUrl: './client-form2.component.html',
  styleUrls: ['./client-form2.component.css']
})
export class ClientForm2Component implements OnInit {

  public client:Client = new Client();
  public clients:Client[] = [];
  constructor(private monFormService : Form_serviceService,private clientService : ClientServicesService) { }

  ngOnInit(): void {
    this.client = this.monFormService.getClient();
  }

  public getClients() : void{
    this.clientService.getClients().subscribe(
      (response : Client[]) => {
        this.clients = response;
      },
      (error : HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }

  public onAddClient(clientForm: NgForm): void {
    this.client.civilite = clientForm.value.civilite;
    this.client.naissance = clientForm.value.naissance;
    this.client.adresse = clientForm.value.adresse;
    this.client.ville = clientForm.value.ville;
    this.client.codePostal = clientForm.value.codePostal;
    this.client.cni = clientForm.value.cni;
    this.client.numCarteBancaire = clientForm.value.numCarteBancaire;
    this.client.rib = clientForm.value.rib;
    this.client.solde = clientForm.value.solde;
    this.clientService.addClient(this.client).subscribe(
      (response: Client) => {
        console.log(response);
        clientForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        clientForm.reset();
      }
    );
  }

}
