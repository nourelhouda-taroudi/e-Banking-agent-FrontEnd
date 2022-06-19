import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from 'src/app/Models/client';
import { Form_serviceService } from 'src/app/Services/form_service.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  public client:Client = new Client();

  constructor(private router: Router, private monFormService : Form_serviceService) { }

  ngOnInit(): void {
  }

  public saveClientData(clientForm: NgForm){
    this.monFormService.setClient(clientForm.value)
    this.router.navigate(['creationCompteClient/creationCompteClient2']);
  }

}
