import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Usuario } from './usuario';

const API = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

    listFromUser(userName: string) {
      return this.http
          .get<Usuario[]>(`${API}/api/usuarios`);     
    
  }
}
