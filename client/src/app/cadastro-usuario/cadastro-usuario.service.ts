import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = 'http://localhost:3000/api/'

@Injectable({
  providedIn: 'root'
})
export class CadastroUsuarioService {

  constructor(private http: HttpClient) { }

  cadUsuarios(data?: any) {
    console.log('SALVOU');
    
      return new Promise((resolve, reject) => this.http.post(`${API}usuario`, data)
          .toPromise().then(res => resolve(res), error => reject(error)));
  }

}
