import { login } from './../models/loginViewModels';
import { getTestBed } from '@angular/core/testing';
import { HomePageComponent } from './../home-page/home-page.component';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { GlobalService } from '../../service/global.service';
import { Token } from '@angular/compiler';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/service/authentication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string;
  senha: string;
  errorLogin: any;
  loginData: any;

  constructor(private apiService: ApiService,
    public globalService: GlobalService,
    private router: Router,
    public authService: AuthenticationService
  ) { }

  ngOnInit() { }

  login() {


    return this.apiService
      .logar({ email: this.email, password: this.senha })
      .subscribe(response => {
        if (response.success == true) {
          this.authService.login(response.data);
          this.router.navigate(["home-page"]);
        }

      },
        error => {
          Swal.fire({
            title: 'OPS',
            html: 'Confira os Dados Digitados',
            icon: 'warning',
            confirmButtonText: 'OK!',
          })
        }

      );
  }
  simpleAlert() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'OK!',
      cancelButtonText: 'No, keep it'
    })
  }
  reenviar() {
    return this.apiService.reenviarEmail({
      email: this.email

    })
      .subscribe(data => {
        if (data.sucess == true) {

          this.apiService.reenviarEmail(data);
        }


      },
        error => {
          Swal.fire({
            title: 'OPS',
            html: 'Confira os Dados Digitados',
            icon: 'error',
            confirmButtonText: 'OK!',
          })



        }
      );
  }
};
