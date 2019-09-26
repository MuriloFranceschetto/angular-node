

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

<<<<<<< HEAD
import { AuthService } from '../authentication/login/auth.service';
=======
import { LoginService } from '../login/login.service';
>>>>>>> e779fb98a563032780700a95b0ab283d44b0196e
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
