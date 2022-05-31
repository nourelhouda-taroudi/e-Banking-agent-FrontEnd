import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Agent } from '../../Models/agent';

@Component({
  selector: 'app-agent-login',
  templateUrl: './agent-login.component.html',
  styleUrls: ['./agent-login.component.css']
})
export class AgentLoginComponent implements OnInit {

  public agent:Agent = new Agent();
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public getAgentLogins(loginForm : NgForm){
    console.log(loginForm.form);
    console.log('Valeurs : ', JSON.stringify(loginForm.value));
    this.router.navigate(["/acceuilAgent"]);
  }
}
