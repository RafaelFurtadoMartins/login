import { Component } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login';


  private showMessages(){
    Swal('Bem-vindo', 'Ao meu app', 'sucess');
  }
  private errorMessage(){
    Swal('ops', 'não foi possivel', 'error');
  }
}
