

import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';

// ANGULAR MATERIAL
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';


import { AppRoutingModule, routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './authentication/login/login.component';
import { HomeComponent } from './home/home.component';
import { PaginaAcessadaComponent } from './pagina-acessada/pagina-acessada.component';
<<<<<<< HEAD
import { AuthService } from './authentication/login/auth.service';
import { AuthGuard } from './guards/auth-guard';
import { AngularWebStorageModule } from 'angular-web-storage';
import { CadUsuarioComponent } from './cadastro/parametros/usuarios/cad-usuario/cad-usuario.component';
=======
import { LoginService } from './login/login.service';
import { AuthGuard } from './guards/auth-guard';
import { AngularWebStorageModule } from 'angular-web-storage';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';

>>>>>>> e779fb98a563032780700a95b0ab283d44b0196e

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PaginaAcessadaComponent,
<<<<<<< HEAD
    CadUsuarioComponent
=======
    CadastroUsuarioComponent,
>>>>>>> e779fb98a563032780700a95b0ab283d44b0196e
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    routing,
    RouterModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatCardModule,
    AngularWebStorageModule,
    HttpClientModule,
    HttpModule,
    MatSnackBarModule,
<<<<<<< HEAD
    FlexLayoutModule,
    MatFormFieldModule
=======
    
>>>>>>> e779fb98a563032780700a95b0ab283d44b0196e
  ],
  providers: [LoginService, AuthGuard, Validators, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
