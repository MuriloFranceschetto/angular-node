import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { UsuariosModel } from '../usuarios.model';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'cad-usuario',
  templateUrl: './cad-usuario.component.html',
  styleUrls: ['./cad-usuario.component.scss'],
  providers: [UsuariosModel,UsuariosService]
})
export class CadUsuarioComponent implements OnInit {

  form: FormGroup;

  constructor(private usuariosModel: UsuariosModel,
              private usuariosService: UsuariosService
    ) { }

  ngOnInit() {
    this.form = this.usuariosModel.getForm();
  }

  salvar() {
    console.log('passou pelo component');
    this.usuariosService.salvar(this.form.getRawValue());
  }

}
