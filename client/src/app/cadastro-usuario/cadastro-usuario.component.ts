import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { LoginService } from './../login/login.service';
import { CadastroUsuarioService } from './cadastro-usuario.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {

  public formCadastroUsuario: FormGroup;

  constructor(
    private cadastroUsuarioService: CadastroUsuarioService,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.formCadastroUsuario = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      senha: new FormControl('', 
      Validators.required
      ),
      nome: new FormControl('', null)
    })
  }

  voltarHome() {
    this.loginService.voltarHome();
  }

  cadUsuario() {
    console.log('awdawda');
    this.cadastroUsuarioService.cadUsuarios(this.formCadastroUsuario.getRawValue());
  }

}
