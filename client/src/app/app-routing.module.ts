
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// IMPORT PARA AS ROTAS
import { AppComponent } from './app.component';
import { AuthenticationRoutingModule } from './authentication/authentication.routing.module';
import { RegistroComponent } from './authentication/registro/registro.component';
import { LoginComponent } from './authentication/login/login.component';

const routes: Routes = [
  { path: 'auth', loadChildren: './authentication/authentication.routing.module#AuthenticationRoutingModule' },
  { path: '', component: LoginComponent},
  { path: '**', component: AppComponent },
];
// canActivate: [AuthGuard]

//export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthenticationRoutingModule
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
