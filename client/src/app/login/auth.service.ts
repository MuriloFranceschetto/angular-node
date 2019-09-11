import { HttpClient } from '@angular/common/http';
import { Injectable, NgModule, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';
import { PaginaAcessadaComponent } from './../pagina-acessada/pagina-acessada.component';
import { LocalStorageService, SessionStorageService } from 'angular-web-storage';


@Injectable({
  providedIn: 'root'
})

@NgModule({
  imports: [
    PaginaAcessadaComponent
  ],
})

export class AuthService {

  private validacao = false;
  public dados;

  mostrarMenuEmitter = new EventEmitter <boolean> ();

  visible: boolean;
  apareceErro: boolean;
  conteudoHome: boolean;

  constructor(private router: Router,
              public local: LocalStorageService,
              public session: SessionStorageService,
              public http: HttpClient) {

                this.dados = localStorage.getItem('login');
               }

  validarLogin(formLogin) {
    if (formLogin.value.email === 'usuario@gmail.com' &&
        formLogin.value.senha === '123') {
      this.validacao = true;
      this.apareceErro = false;

      localStorage.setItem('login', JSON.stringify(formLogin['value']));
      
      console.log('VALIDACAO GANHA TRUE E SALVA NO LOCALSTORAGE');
    } else {
      this.validacao = false;
      this.apareceErro = true;
      console.log('APARECE ERRO')
    }
        
    if (this.validacao === true) {
      this.visible = true;
      this.router.navigate(['/paginaAcessada']);
      console.log('VAI PRA PAGINA ACESSADA');
    } else {
      this.visible = false;
    }
  }

  salvaValorAcessado() {
    if (this.dados !== null) {
      this.validacao = true;
      this.visible = true;
      console.log('CONFERE SE VALOR TA SALVO');
    }
  }

  usuarioAutenticado() {
    return this.validacao;
  }

  deslogar() {
    console.log('DESLOGA');
    this.visible = false;
    this.validacao = false;
    localStorage.clear();
  }

  MostrarLoginHome() {
    this.dados = localStorage.getItem('login');
    if (this.dados !== null) {
      this.conteudoHome = false;
      console.log('TIRA O LOGIN');
    } else {
      this.conteudoHome = true;
      console.log('COLOCA O LOGIN');
    }
  }

  voltarHome() {
    console.log('VAI PRA HOME');
    this.router.navigate(['/']);
  }

}
