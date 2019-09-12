

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { LoginService } from '../login/login.service';
import { LocalStorage } from 'angular-web-storage';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  quantidadeDados = LocalStorage.length;

  constructor(private loginService: LoginService,
              private router: Router,
              ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean> | boolean {

      if ( this.loginService.usuarioAutenticado() ) {
        return true;
      }
      this.router.navigate(['/login']);
      return false;
  }

}
