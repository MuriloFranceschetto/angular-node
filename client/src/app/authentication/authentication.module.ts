
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';
import { RegistroModule } from './registro/registro.module';
import { AuthenticationRoutingModule } from './authentication.routing.module';

@NgModule({
  declarations: [
  ],
  imports: [
    FlexLayoutModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule,
    RegistroModule,
    LoginModule,
  ],
  exports: [],
  providers: [],
})

export class AuthenticationModule { }
