import { AgentService } from './../../Services/agent.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { JwtService } from 'src/app/Services/jwt.service';
import { Agent } from '../../Models/agent';

@Component({
  selector: 'app-agent-login',
  templateUrl: './agent-login.component.html',
  styleUrls: ['./agent-login.component.css'],
})
export class AgentLoginComponent implements OnInit {
  agent: Agent = new Agent();
  public connected_id:Number=new Number();
  errors = '';
  constructor(
    private router: Router,
    private readonly authService: AuthService,
    private readonly jwtService : JwtService,
    private agentService:AgentService
  ) {}

  ngOnInit(): void {}

  public getAgentLogins(loginForm: NgForm) {
    this.authService.login(loginForm.value).subscribe(
      (res :any) => {
        const { accessToken,tokenType, ...user } = res;
        this.jwtService.handle({ token:accessToken, user });
        console.log(res );
        this.connected_id=res.id
        this.agentService.getAgentById(this.connected_id).subscribe((response:Agent|any)=>{
          console.log(response)  
          this.agent=response;
            this.agentService.setId(this.agent);
            console.log(this.agent.first_time)
            if(Object.values(this.agent)[1].first_time === "not_change"){
              this.router.navigate(['/change']);
            }else 
            this.router.navigate(['/acceuilAgent']);
        })
        
      },
      (err) => {
        if (err.status === 401) {
          this.errors = 'Username ou mot de passe';
        }
      }
    );
  }
}
