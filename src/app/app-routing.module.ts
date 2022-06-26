import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientFormComponent } from './Components/client-form/client-form.component';
import { AgentLoginComponent } from './Components/agent-login/agent-login.component';
import { AgentAcceuilComponent } from './Components/agent-acceuil/agent-acceuil.component';
import { ClientForm2Component } from './Components/client-form2/client-form2.component';
import { ListeClientsComponent } from './Components/liste-clients/liste-clients.component';
import { AgentInfoComponent } from './Components/agent-info/agent-info.component';
import { AuthGuard } from './Components/guards/auth.guard';

const routes: Routes = [
  { path: 'agentLogin', component: AgentLoginComponent },
  { path: '', redirectTo : 'agentLogin', pathMatch : 'full'},
  { path: 'acceuilAgent', component: AgentAcceuilComponent,canActivate:[AuthGuard]},
  { path: 'creationCompteClient', component: ClientFormComponent ,canActivate:[AuthGuard]},
  { path: 'creationCompteClient/creationCompteClient2', component: ClientForm2Component ,canActivate:[AuthGuard]},
  { path: 'listeClients', component: ListeClientsComponent,canActivate:[AuthGuard] },
  { path: 'agentInfo', component: AgentInfoComponent ,canActivate:[AuthGuard]}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
