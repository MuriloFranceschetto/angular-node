
import { Component, OnInit } from '@angular/core';

import { FormControl, Validators, FormGroup} from '@angular/forms';
import { AuthService } from './auth.service';
import { LoginModel } from './login.model';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  loginModel = new LoginModel();

  constructor(private authService: AuthService,
              private loginService: LoginService
    ) { 
 
      }  
 
  ngOnInit() {
    this.loginForm = this.loginModel.getForm();
    // this.formLogin = new FormGroup({
    //   email: new FormControl('', [
    //     Validators.required,
    //     Validators.email
    //   ]),
    //   senha: new FormControl('', 
    //   Validators.required
    //   )
    // })
  }

  // get email() {
  //     return this.formLogin.get('email');
  // }
  // get senha() {
  //     return this.formLogin.get('senha');
  // }

  validaLogin() {
    console.log('Passou pelo component');
    this.loginService.login(this.loginForm.value);
  }
  
  MostrarLoginHome() {
    this.authService.MostrarLoginHome();
  }

  voltarHome() {
    this.authService.voltarHome();
  }

}


