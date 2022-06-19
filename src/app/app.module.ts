import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientFormComponent } from './Components/client-form/client-form.component';
import { AgentLoginComponent } from './Components/agent-login/agent-login.component';
import { FormsModule } from '@angular/forms';
import { AgentAcceuilComponent } from './Components/agent-acceuil/agent-acceuil.component';
import { ClientForm2Component } from './Components/client-form2/client-form2.component';
import { AgentInfoComponent } from './Components/agent-info/agent-info.component';
import { ListeClientsComponent } from './Components/liste-clients/liste-clients.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ClientFormComponent,
    AgentLoginComponent,
    AgentAcceuilComponent,
    ClientForm2Component,
    AgentInfoComponent,
    ListeClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
