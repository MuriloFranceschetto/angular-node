import { Injectable } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthService {

    constructor(private cookieService: CookieService){

    }

    setToken(data: any) {
        if (data) {
            this.cookieService.set('token', data.token, 2, '/');
            return true
        }
        return false;
    }
}
