
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public formCadastroUsuario: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.MostrarLoginHome();
    this.formCadastroUsuario = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      senha: new FormControl('', 
      Validators.required
      ),
      nome: new FormControl('',
      Validators.required
      )
    })
  }

}
