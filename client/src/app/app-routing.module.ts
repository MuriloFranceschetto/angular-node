
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// IMPORT PARA AS ROTAS
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './authentication/login/login.component';
import { AuthenticationRoutingModule } from './authentication/authentication.routing.module';
import { PagesRoutingModule } from './pages/pages.routing.module';

import { AuthGuard } from './guards/auth-guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', component: LoginComponent },
  // { path: 'auth', loadChildren: 'app/authentication/authentication.module#AuthenticationModule' },
  { path: 'pages', loadChildren: './pages/pages.module#PagesModule' },
=======
import { AppComponent } from './app.component';
import { AuthenticationRoutingModule } from './authentication/authentication.routing.module';
import { RegistroComponent } from './authentication/registro/registro.component';
import { LoginComponent } from './authentication/login/login.component';

const routes: Routes = [
  { path: 'auth', loadChildren: './authentication/authentication.routing.module#AuthenticationRoutingModule' },
  { path: '', component: LoginComponent},
  { path: '**', component: AppComponent },
>>>>>>> release-1.0.0-joaok
];
// canActivate: [AuthGuard]

//export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthenticationRoutingModule,
    PagesRoutingModule
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
