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
  errors = '';
  constructor(
    private router: Router,
    private readonly authService: AuthService,
    private readonly jwtService : JwtService
  ) {}

  ngOnInit(): void {}

  public getAgentLogins(loginForm: NgForm) {
    this.authService.login(loginForm.value).subscribe(
      (res) => {
        const { accessToken,tokenType, ...user } = res;
        this.jwtService.handle({ token:accessToken, user });
        console.log({res});
        
        this.router.navigate(['/acceuilAgent']);
      },
      (err) => {
        if (err.status === 401) {
          this.errors = 'Username ou mot de passe';
        }
      }
    );
  }
}
