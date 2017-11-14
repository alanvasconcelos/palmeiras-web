import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  erroLogin;
  mensagemErro = "Email ou senha inválidos";

  constructor() {
    this.erroLogin = false;
  }

  logar() {
    this.erroLogin = !this.erroLogin;
  }
}
