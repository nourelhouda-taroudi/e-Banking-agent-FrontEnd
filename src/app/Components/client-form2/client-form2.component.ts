import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Client } from 'src/app/Models/client';
import { Form_serviceService } from 'src/app/Services/form_service.service';
import { ClientServicesService } from 'src/app/Services/clientServices.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/Services/jwt.service';

@Component({
  selector: 'app-client-form2',
  templateUrl: './client-form2.component.html',
  styleUrls: ['./client-form2.component.css'],
})
export class ClientForm2Component implements OnInit {
  public client: Client = new Client();
  public clients: Client[] = [];
  constructor(
    private router: Router,
    private monFormService: Form_serviceService,
    private clientService: ClientServicesService,
    private readonly jwtService: JwtService
  ) {}

  ngOnInit(): void {
    this.client = this.monFormService.getClient();
  }

  public getClients(): void {
    this.clientService.getClients().subscribe(
      (response: Client[]) => {
        this.clients = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddClient(clientForm: NgForm): void {
    this.client.birthday = clientForm.value.birthday;
    this.client.address = clientForm.value.address;
    this.client.IDCard = clientForm.value.IDCard;
   const balance = clientForm.value.balance;
    this.client.immatriculation = clientForm.value.immatriculation;
    console.log(this.client);
    const idAgent = this.jwtService.getUserId();
    console.log({idAgent});
    if(idAgent==null){
      // TODO : logout
      return;
    }
    
    this.clientService.addClient(this.client,+idAgent).subscribe(
      (response: Client) => {
        clientForm.reset();
        console.log(response)
        this.router.navigate(['listeClients']);
       this.clientService.saveAccount(Object.values(response)[0],balance).subscribe((response:any)=>{
        console.log("account saved")
       })

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        clientForm.reset();
      }
    );
  }
}
