import { LoginService } from './login.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../services/auth.service';
import { FormControl, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;

  constructor(
      private loginService: LoginService,
      private router: Router,
      private authService: AuthService
    ) { }  
 
  ngOnInit() {
    this.formLogin = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      senha: new FormControl('', 
      Validators.required
      )
    })
  }

  get email() {
      return this.formLogin.get('email');
  }
  get senha() {
      return this.formLogin.get('senha');
  }
  
  validarLogin(response, err) {
      this.loginService.validarLogin(this.formLogin.value)
          .then((response: object) => {
              if (response) {
                  console.log(response)
                  this.authService.setToken(response);
                  this.authService.setCredentials(response);
                  this.router.navigate(['/paginaAcessada']);
              } else {
                console.log('Usuario ou senha incorretos');
              }
          }).catch((err) => {
              console.log('Usuario ou senha incorretos');
          });
  
  }
  
  MostrarLoginHome() {
    this.loginService.MostrarLoginHome();
  }

  voltarHome() {
    this.loginService.voltarHome();
  }

}


