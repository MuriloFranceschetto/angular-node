import { HttpClient } from '@angular/common/http';
import { Injectable, NgModule, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';
// import { PaginaAcessadaComponent } from '../../pagina-acessada/pagina-acessada.component';
import { LocalStorageService, SessionStorageService } from 'angular-web-storage';
import { CookieService } from 'ngx-cookie-service';


const API = 'http://localhost:3000/api/';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

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

  validarLogin(data?: any) {
    
    console.log('Deu o POST');

    return new Promise((resolve, reject) => this.http.post(`${API}usuario`, data)
        .toPromise().then(res => resolve(res), error => reject(error)));
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
