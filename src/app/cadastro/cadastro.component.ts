import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ApiService } from 'src/service/api.service';
import { GlobalService } from 'src/service/global.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/service/authentication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  nome: any;
  senha: any;
  email: any;
  confirmarSenha: any;
  cnpj: any;
  nomeEmpresa: any;
  cpf: any;
  telefone: any;
  registrer: any;
  formG: any;
  loginData: any;
  constructor(private apiService: ApiService,
    public globalService: GlobalService,
    public authService: AuthenticationService,
    public router: Router,

  ) { }

  ngOnInit() { }
  validation() {
    this.registrer = this.formG({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cpf: [''],
      cnpj: [''],
      nomeEmpresa: [''],
      senha: ['', Validators.required],
      confirmarSenha: ['', Validators.required],
      telefone: ['']
    });

  }



  cadastro() {
    return this.apiService.cadastro({
      name: this.nome,
      email: this.email,
      cpf: this.cpf,
      companyName: this.nomeEmpresa,
      cnpj: this.cnpj,
      password: this.senha,
      confirmPassword: this.confirmarSenha,
      phone: this.telefone
    })
      .subscribe(data => {

        if (data.success == true) {
          this.authService = data;
          this.router.navigate(["login"]);
          Swal.fire({
            title: 'AEE',
            html: 'Cadastro Efetuado com sucesso!',
            icon: 'success',
            confirmButtonText: 'OK!',
          })
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
