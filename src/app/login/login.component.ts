import { HomePageComponent } from './../home-page/home-page.component';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { GlobalService } from '../../service/global.service';
import { Token } from '@angular/compiler';
import { Router } from '@angular/router';

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
  authService: any;
  constructor(private apiService: ApiService, public globalService: GlobalService, private router: Router) { }

  ngOnInit() { }

  login() {


    return this.apiService
      .logar({ email: this.usuario, password: this.senha })
      .subscribe(data => {

        this.authService.SetUsuario(data.usuario);
        let token = data.id;
        this.authService.setToken(token);
        this.router.navigate(["HomePageComponent"]);

        console.log('Retorno da API:', this.loginData);

      },
          error => console.log('Erros: ', error)
      );
    }
  }


