
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// IMPORT PARA AS ROTAS
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaginaAcessadaComponent } from './pagina-acessada/pagina-acessada.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';

import { AuthGuard } from './guards/auth-guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'paginaAcessada', component: PaginaAcessadaComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'cadastroUsuario', component: CadastroUsuarioComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
