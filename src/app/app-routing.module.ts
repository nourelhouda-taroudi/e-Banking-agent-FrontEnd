import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientFormComponent } from './Components/client-form/client-form.component';
import { AgentLoginComponent } from './Components/agent-login/agent-login.component';
import { AgentAcceuilComponent } from './Components/agent-acceuil/agent-acceuil.component';
import { ClientForm2Component } from './Components/client-form2/client-form2.component';
import { ListeClientsComponent } from './Components/liste-clients/liste-clients.component';
import { AgentInfoComponent } from './Components/agent-info/agent-info.component';

const routes: Routes = [
  { path: 'agentLogin', component: AgentLoginComponent },
  { path: '', redirectTo : 'agentLogin', pathMatch : 'full'},
  { path: 'acceuilAgent', component: AgentAcceuilComponent},
  { path: 'creationCompteClient', component: ClientFormComponent },
  { path: 'creationCompteClient/creationCompteClient2', component: ClientForm2Component },
  { path: 'listeClients', component: ListeClientsComponent },
  { path: 'agentInfo', component: AgentInfoComponent }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
