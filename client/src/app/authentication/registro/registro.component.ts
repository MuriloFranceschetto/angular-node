import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { RegistroModel } from './registro.model';
import { RegistroService } from './registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
  providers: [RegistroService],
})
export class RegistroComponent implements OnInit {

  public registroForm: FormGroup;
  public model = new RegistroModel();

  constructor(private registroModel: RegistroModel,
              private registroService: RegistroService,
              private router: Router) { }

  ngOnInit() {
    // this.registroForm = this.registroModel.getForm();
  }

  cadastro() {
    console.log('chegou no component');
    // let data = {
    //   name: this.registroForm['controls'].name,
    //   cpf: this.registroForm['controls'].cpf,
    //   database: this.registroForm['controls'].cpf,
    //   acessos: [{
    //       nome: req.body.nome,
    //       email: req.body.email,
    //       senha: req.body.senha,
    //   }]
    // }
    this.registroService.salvar(this.model.getBody())
      .then((response) => {
        console.log('Resposta do backend: ' + response);
        this.router.navigate(['/login']);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

}
