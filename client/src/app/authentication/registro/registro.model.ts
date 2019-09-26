import { FormGroup, FormControl, Validators } from '@angular/forms';

export class RegistroModel {

    constructor() {

    }

    getForm(): FormGroup {
        let form = new FormGroup({
            name: new FormControl(Validators.required),
            cpf: new FormControl(Validators.required),
            nome: new FormControl(Validators.required),
            email: new FormControl(Validators.required, Validators.email),
            senha: new FormControl(Validators.required),
            confirmaSenha: new FormControl(Validators.required)
        })
        return form;
    }
}