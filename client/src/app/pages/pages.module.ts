import { CadUsuarioComponent } from './cadastro/usuarios/cad-usuario/cad-usuario.component';
import { UsuariosComponent } from './cadastro/usuarios/usuarios.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages.routing.module';

// Angular Material
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    PagesComponent,
    UsuariosComponent,
    CadUsuarioComponent,
  ],
  imports: [
    MatExpansionModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    CommonModule,
    PagesRoutingModule,
  ]
})
export class PagesModule { }
