import { NgModule } from "@angular/core";

import { UsuariosComponent } from './usuarios.component';
import { CadUsuarioComponent } from './cad-usuario/cad-usuario.component';
import { UsuariosService } from './usuarios.service';


@NgModule({
    declarations: [
        UsuariosComponent,
        CadUsuarioComponent,
    ],
    imports: [],
    exports: [],
    providers: [
        UsuariosService
    ]
})

export class UsuariosModule {
    
}