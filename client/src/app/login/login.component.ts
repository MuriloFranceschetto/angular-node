
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormControl, Validators, FormGroup} from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;

  constructor(
      private authService: AuthService,
      private router: Router
    ) { 
 
      }  
 
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

  validarLogin() {
      this.authService.validarLogin(this.formLogin.value)
          .then((response: object) => {
              if (response) {
                  this.authService.setToken(response);
                  this.authService.setCredentials(response);
                  this.router.navigate(['pages/dashboard']);
              } else {
                console.log('Usuario ou senha incorretos');
              }
          }).catch((err) => {
              console.log('Usuario ou senha incorretos');
          });
  
  }
  
  MostrarLoginHome() {
    this.authService.MostrarLoginHome();
  }

  voltarHome() {
    this.authService.voltarHome();
  }

}


