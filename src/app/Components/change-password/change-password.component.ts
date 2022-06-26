import { Router } from '@angular/router';
import { AgentService } from './../../Services/agent.service';
import { Component, OnInit } from '@angular/core';
import { Agent } from 'src/app/Models/agent';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  agent: Agent = new Agent();
  constructor(private service:AgentService,private router:Router) { }

  ngOnInit(): void {
    this.agent=this.service.getId();
  }
  change_Password(data:any){
    console.log(data)
    if(data != '' ){
      console.log(this.agent)
      this.service.changePassword(Number(localStorage.getItem('id')),data).subscribe(
        (response)=>{
         
           console.log("changed")
           this.router.navigate(['/acceuilAgent']);
        }
            )
          }

}
}
