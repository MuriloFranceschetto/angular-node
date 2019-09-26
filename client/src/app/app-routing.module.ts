
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// IMPORT PARA AS ROTAS
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { AuthenticationRoutingModule } from './authentication/authentication.routing.module';

import { AuthGuard } from './guards/auth-guard';

const routes: Routes = [
  { path: 'auth', loadChildren: 'app/authentication/authentication.routing.module#AuthenticationRoutingModule' },
  { path: '', component: HomeComponent },
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
