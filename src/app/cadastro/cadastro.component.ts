import { Component, OnInit } from '@angular/core';

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
  formG
  constructor() { }

  // ngOnInit(){
  //   this.registrer = this.formG({
  //     nome: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     cpf: [''],
  //     cnpj: [''],
  //     nomeEmpresa: [''],
  //     senha: ['', Validators.required],
  //     confirmarSenha: ['', Validators.required]
  //   });


  // }
  cadastro() {

  }
}
