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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './utils/jwt.interceptor';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientFormComponent,
    AgentLoginComponent,
    AgentAcceuilComponent,
    ClientForm2Component,
    AgentInfoComponent,
    ListeClientsComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
