import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Client } from 'src/app/Models/client';
import { Form_serviceService } from 'src/app/Services/form_service.service';
import { ClientServicesService } from 'src/app/Services/clientServices.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-client-form2',
  templateUrl: './client-form2.component.html',
  styleUrls: ['./client-form2.component.css']
})
export class ClientForm2Component implements OnInit {

  public client:Client = new Client();
  public clients:Client[] = [];
  constructor(private router: Router,private monFormService : Form_serviceService,private clientService : ClientServicesService) { }

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
    this.client.birthday = clientForm.value.birthday;
    this.client.address = clientForm.value.address;
    this.client.idcard = clientForm.value.idcard;
    this.client.immatriculation = clientForm.value.immatriculation;
    // generer un mot de passe par default
    //this.client.password = this.client.last_name.concat(this.client.phone_number.toString());
    console.log(this.client);
    this.clientService.addClient(this.client).subscribe(
      (response: Client) => {
        clientForm.reset();
        this.router.navigate(['listeClients']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        clientForm.reset();
      }
    );
  }

}
