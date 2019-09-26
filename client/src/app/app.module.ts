
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


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './authentication/login/login.component';
// import { HomeComponent } from './home/home.component';
import { PaginaAcessadaComponent } from './pagina-acessada/pagina-acessada.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth-guard';
import { AngularWebStorageModule } from 'angular-web-storage';
import { CadUsuarioComponent } from './cadastro/parametros/usuarios/cad-usuario/cad-usuario.component';


// Módulos dos componentes
import { AuthenticationRoutingModule } from './authentication/authentication.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    PaginaAcessadaComponent,
    CadUsuarioComponent,
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
    RouterModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatCardModule,
    AngularWebStorageModule,
    HttpClientModule,
    HttpModule,
    MatSnackBarModule,
    FlexLayoutModule,
    MatFormFieldModule,
    AuthenticationRoutingModule,
  ],
  providers: [
    AuthService, 
    CookieService,
    AuthGuard, 
    Validators
  ],
    bootstrap: [AppComponent]
  })
export class AppModule { }
