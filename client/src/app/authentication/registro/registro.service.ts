import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API_CONFIG } from './../../app.setings';

@Injectable()
export class RegistroService {

    constructor(private http: HttpClient) {

    }

    salvar(data: any){
        console.log('Chegou no service')
        console.log(data);
        return new Promise((resolve, reject) => this.http.post(`${API_CONFIG.url}auth/registro`, data)
            .toPromise().then(res => resolve(res), error => reject(error)));
    }
}
