import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { CadUsuarioComponent } from './cadastro/usuarios/cad-usuario/cad-usuario.component';
import { UsuariosComponent } from './cadastro/usuarios/usuarios.component';
import { PagesComponent } from './pages.component';

const pagesRoutes: Routes = [
    { path: 'pages', component: PagesComponent },
    { path: 'pages', 
        children: [
            { path: 'cadastro', children: [
                    { path: 'usuarios', component: UsuariosComponent },
                    { path: 'usuarios', children: [
                        { path: 'cad', component: CadUsuarioComponent}
                    ]}
                ]
            }
        ]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(pagesRoutes)],
    exports: [ RouterModule ]
})

export class PagesRoutingModule {}