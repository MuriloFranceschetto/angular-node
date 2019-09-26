
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { LoginModel } from './login.model';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  loginError = false;
  mensagem = '';

  public loginForm: FormGroup;
  loginModel = new LoginModel();

  constructor(
              private loginService: LoginService,
              private authService: AuthService,
              private router: Router,
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
    this.loginService.login(this.loginForm.value)
        .then((response: object) => {
            if (response) {
                this.authService.setToken(response);
                this.router.navigate(['../../pagina-acessada'])
            } else {
                this.loginError = true;
                this.mensagem = 'Usuário ou senha incorretos!';
            }
        }).catch((err) => {
          this.loginError = true;
          this.mensagem = 'Usuário ou senha incorretos!';
        });
  }
  
  MostrarLoginHome() {
    // this.authService.MostrarLoginHome();
  }

  voltarHome() {
    // this.authService.voltarHome();
  }

}


