import { FormGroup, Validators, FormControl } from '@angular/forms';


export class UsuariosModel {

    constructor() {

    }

    getForm(): FormGroup {
        let form = new FormGroup({
            nome: new FormControl('', Validators.required),
            login: new FormControl('', [
                Validators.required,
                Validators.email
            ]),
            senha: new FormControl('', Validators.required)
        });
        return form;
    }
}