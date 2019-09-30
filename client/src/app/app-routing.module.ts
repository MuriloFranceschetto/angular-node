
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// IMPORT PARA AS ROTAS
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
