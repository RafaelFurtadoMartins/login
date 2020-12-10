import { ApiService } from 'src/service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redefinir-senha',
  templateUrl: './redefinir-senha.component.html',
  styleUrls: ['./redefinir-senha.component.css']
})
export class RedefinirSenhaComponent implements OnInit {
  email: string;
  tokenConfirmEmail: any;
  constructor(private apiService: ApiService,
    ) { }

  ngOnInit(): void {
  }
redefinirSenha(){
return this.apiService.redefinir({
email: this.email
})
.subscribe()
  if (this.tokenConfirmEmail == true){

}
}
}
