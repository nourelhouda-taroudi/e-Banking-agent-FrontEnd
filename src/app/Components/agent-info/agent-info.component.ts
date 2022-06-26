import { AgentService } from './../../Services/agent.service';
import { Agent } from './../../Models/agent';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agent-info',
  templateUrl: './agent-info.component.html',
  styleUrls: ['./agent-info.component.css']
})
export class AgentInfoComponent implements OnInit {

  constructor(private agentService:AgentService) { }

  public agent: Agent = new Agent();
public username! :string;
public email! :string;
public phoneNumber! :number;
public address! :string;
public birthday! :string;
  ngOnInit(): void {
    this.agent=this.agentService.getId();
    console.log(Object.values(this.agent)[0])
    this.username=Object.values(this.agent)[1].username;
    this.email=Object.values(this.agent)[1].email;
    this.phoneNumber=Object.values(this.agent)[1].phoneNumber;
    this.address=Object.values(this.agent)[1].address;
    this.birthday=Object.values(this.agent)[1].birthday;
  }
getAgentId(id:Number){
return this.agentService.getAgentById(id).subscribe((response:Agent)=>
{
  this.agent=response;
  console.log(this.agent)

})
}

}
