import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario: any = {
    email: null,
    senha: null
  }

  constructor(
    private router: Router
  ) {}

  logar() {
    if (this.usuario.email === 'socio' && this.usuario.senha === 'socio') {
      this.router.navigate(['/socio/dash']);
    } 
  }
}
