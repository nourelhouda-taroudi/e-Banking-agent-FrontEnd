import { AuthService } from 'src/app/Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { JwtService } from 'src/app/Services/jwt.service';

@Component({
  selector: 'app-agent-acceuil',
  templateUrl: './agent-acceuil.component.html',
  styleUrls: ['./agent-acceuil.component.css']
})
export class AgentAcceuilComponent implements OnInit {
  user:string|null = '';
  constructor(
    private readonly jwtService: JwtService,
    public auth:AuthService
  ) { }
  ngOnInit(): void {
    this.getUser();
  }
  getUser(){
    this.user = this.jwtService.getUsername();
  }


}
