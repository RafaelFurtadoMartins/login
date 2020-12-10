import { RedefinirSenhaComponent } from './redefinir-senha/redefinir-senha.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from 'src/service/auth-guard.service';

const routes: Routes = [

  {
    path: '',
    component: LoginComponent,
    data: {
      title: 'Login'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login'
    },
  },
  {
    path: 'cadastro',
    component: CadastroComponent,
    data: {
      title: 'Cadastro'
    },
  },
  {
    path: 'home-page',
    component: HomePageComponent,
    canActivate: [AuthGuard],

    data: {
      title: 'Home-Page'
    }
  },
  {
    path: 'redefinir-senha',
    component: RedefinirSenhaComponent,
    data: {
      title: 'Redefinir-Senha'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
