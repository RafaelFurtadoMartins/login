import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ApiService } from 'src/service/api.service';
import { GlobalService } from 'src/service/global.service';

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
  constructor(private apiService: ApiService, public globalService: GlobalService) { }

  ngOnInit(){
    this.registrer = this.formG({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cpf: [''],
      cnpj: [''],
      nomeEmpresa: [''],
      senha: ['', Validators.required],
      confirmarSenha: ['', Validators.required]
    });


  }
  cadastro() {
    this.apiService.cadastro({
      nome: this.nome,
      email: this.email,
      cpf: this.cpf,
      nomeEmpresa: this.nomeEmpresa,
      cnpj: this.cnpj,
      senha: this.senha,
      confirmarSenha: this.confirmarSenha
    })
    .subscribe(data => {

      if (data.success == true) {
        this.loginData = data;
      }
      },
      error => {

        console.log('Erros: ', error);




      }
    );
}
};
