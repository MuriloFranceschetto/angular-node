import { FormGroup, Validators, FormControl } from '@angular/forms';


export class UsuariosModel {

    constructor() {

    }

    getForm(): FormGroup {
        let form = new FormGroup({
            nome: new FormControl('', Validators.required),
            email: new FormControl('', [ Validators.required, Validators.email ]),
            senha: new FormControl('', Validators.required),
            database: new FormControl(),
        });
        return form;
    }
}