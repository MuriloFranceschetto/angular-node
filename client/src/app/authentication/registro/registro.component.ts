import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { RegistroModel } from './registro.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  registroForm: FormGroup

  constructor(private registroModel: RegistroModel) { }

  ngOnInit() {
    this.registroForm = this.registroModel.getForm();
  }

  cadastro() {
    
  }

}
