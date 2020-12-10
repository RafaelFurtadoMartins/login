import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Injectable, Type } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ApiService } from 'src/service/api.service';
import { AuthenticationService } from 'src/service/authentication.service';
import Swal from 'sweetalert2/*/sweetalert2.js';
import { RedefinirSenhaComponent } from './redefinir-senha/redefinir-senha.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    HomePageComponent,
    RedefinirSenhaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
    
  ],
  providers: [
    ApiService,
    AuthenticationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
