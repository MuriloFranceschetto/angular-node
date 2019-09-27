import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';
import { LoginService } from './auth.service';
import { LoginModel } from './login.model';
import { AuthService } from './../../services/auth.service';
import { FlexLayoutModule } from '@angular/flex-layout';

// Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthenticationRoutingModule } from './../authentication.routing.module';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FlexLayoutModule,
    // Angular Material
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [
  ],
  providers: [
    AuthService,
    LoginService,
    LoginModel
  ]
})
export class LoginModule { }
