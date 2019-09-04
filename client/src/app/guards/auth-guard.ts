

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../login/auth.service';
import { LocalStorage } from 'angular-web-storage';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  quantidadeDados = LocalStorage.length;

  constructor(private authService: AuthService,
              private router: Router,
              ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean> | boolean {

      if ( this.authService.usuarioAutenticado() ) {
        return true;
      }
      this.router.navigate(['/login']);
      return false;
  }

}
