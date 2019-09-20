import { FormGroup, FormControl, Validators } from '@angular/forms';

export class LoginModel {

    constructor() {

    }

    getForm(): FormGroup {
        let form = new FormGroup({
            usuario: new FormControl('', [Validators.required, Validators.email]),
            senha: new FormControl('', Validators.required),
        });
        return form;
    }

}