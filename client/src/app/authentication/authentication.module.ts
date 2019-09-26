
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { RegistroModule } from './registro/registro.module';
import { AuthenticationRoutingModule } from './authentication.routing.module';

// ANGULAR MATERIAL
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    FlexLayoutModule,
    CommonModule,
    FormsModule,
    RegistroModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule,  
    
    // Angular Material
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [],
  providers: [],
})

export class AuthenticationModule { }
