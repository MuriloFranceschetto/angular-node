import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public cookieService: CookieService
  ) { }

  // Salva um Token criptografado 
  setToken(data: any) {
    if(data) {
      this.cookieService.set('Token', data.token, 2, '/');
      return true
    } 
    return false
  }

  // Salva as credenciais do usuario
  setCredentials(user: any) {
    let settings = {
      session: {
        usuario: {
          usuario: user.login,
          nome: user.nome,
        },
        datetimelastsession: new Date(),
      },
    };
    this.cookieService.set('settings', JSON.stringify(settings), 2, '/');
    return true;
  }

  
  setPermissao(data: any) {
    if (data) {
      this.cookieService.set('permissao', JSON.stringify(data), 2, '/');
      return true;
    }
    return false;
  }

}
