import { Component, OnInit } from '@angular/core';  
import { Router } from '@angular/router';  
import { AuthenticationService } from 'src/service/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})  
export class LoginComponent {  
  username: string;  
  hide = true;
  password: string;  
  title = 'auth-guard-demo';  
  constructor(private _auth: AuthenticationService, private _router: Router) {  
    if (this._auth.loggedIn) {  
      this._router.navigate(['produtos']);  
    }  
  }  
  login(): void {  
    if (this.username != '' && this.password != '') {  
      if (this._auth.login(this.username, this.password)) {  
        this._router.navigate(["produtos"]);  
      }  
      else  
        alert("Wrong username or password");  
    }  
  }  
}  


