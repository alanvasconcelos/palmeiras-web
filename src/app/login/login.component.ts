import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  erroLogin;
  mensagemErro = "Email ou senha inválidos";

  constructor(
    private router: Router
  ) {
    this.erroLogin = false;
  }

  logar(email, senha) {
    if (email === 'socio' && senha === 'socio') {
      //redireciona
      this.router.navigate(['socio']);
      console.log(email);
      console.log(senha);
    } else {
      this.erroLogin = true;
    }

  }
}
