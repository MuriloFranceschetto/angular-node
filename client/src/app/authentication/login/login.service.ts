import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from './../../app.setings';

let url = 'http://localhost:3000/api/auth/';

@Injectable()
export class LoginService {

    constructor(private http: HttpClient) {

    }

    login(data: any) {
        console.log('Passou pelo service');
        return new Promise((resolve, reject) => this.http.post(`${API_CONFIG.url}auth`, data)
            .toPromise().then(res => resolve(res), error => reject(error)));
    }
}