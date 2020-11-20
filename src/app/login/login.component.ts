import { HomePageComponent } from './../home-page/home-page.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/service/authentication.service';
import { ApiService } from '../api.service';
import { GlobalService } from '../global.service';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  usuario: string;
  senha: string;
  errorLogin: any;
  loginData: any;
  constructor(private apiService: ApiService, public globalService: GlobalService) { }

  ngOnInit() {


  }

  login() {


    this.apiService
      .logar({ email: this.usuario, password: this.senha })
      .subscribe(retOk => {

        if (retOk.success == true) {

          this.loginData = retOk;
          localStorage.setItem('currentUser', JSON.stringify({ token: Token, name: this.usuario }));
          var currentUser = JSON.parse(localStorage.getItem('currentUser'));

          console.log('Retorno da API:', this.loginData);

        }

      }, error => {

        console.log('Erros: ', error);


    
      });


  }
 

}



