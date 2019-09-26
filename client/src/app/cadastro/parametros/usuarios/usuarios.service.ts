import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from './../../../app.setings';

let url = 'http://localhost:3000/api/usuario/';
// export const API = {
//     'url':url
// }

@Injectable()
export class UsuariosService {

    constructor(private http: HttpClient) {

    }

    salvar(data?: any) {
        console.log('Deu boa');
        return new Promise((resolve, reject) => this.http.post(`${API_CONFIG.url}cad/usuario/`, data)
            .toPromise().then(res => resolve(res), error => reject(error)));
    }
}