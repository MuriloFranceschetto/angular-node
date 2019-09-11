
import { Component, OnInit } from '@angular/core';

import { FormControl, Validators, FormGroup} from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;

  constructor(private authService: AuthService
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
    this.authService.validarLogin(this.formLogin.getRawValue());
  }
  
  MostrarLoginHome() {
    this.authService.MostrarLoginHome();
  }

  voltarHome() {
    this.authService.voltarHome();
  }

}


