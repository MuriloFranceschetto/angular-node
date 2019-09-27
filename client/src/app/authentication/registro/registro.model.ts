import { FormGroup, FormControl, Validators } from '@angular/forms';

export class RegistroModel {

    name = '';
    cpf = '';
    nome = '';
    email = '';
    senha = '';
    confirmaSenha = '';
    registroForm: FormGroup;

    constructor() {
        
    }

    getForm(): FormGroup {
        let form = new FormGroup({
            name: new FormControl(Validators.required),
            cpf: new FormControl(Validators.required),
            nome: new FormControl(Validators.required),
            email: new FormControl([Validators.required, Validators.email]),
            senha: new FormControl(Validators.required),
            confirmaSenha: new FormControl(Validators.required)
        })
        return form;
    }

    getBody() {
        return {
            name: this.registroForm['controls'].name,
            cpf: this.registroForm['controls'].cpf,
            database: this.registroForm['controls'].cpf,
            acessos: [{
                nome: this.registroForm['controls'].nome,
                email: this.registroForm['controls'].email,
                senha: this.registroForm['controls'].senha,
            }]
        }
    }
}