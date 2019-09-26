import { CadUsuarioComponent } from './cadastro/parametros/usuarios/cad-usuario/cad-usuario.component';

import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// IMPORT PARA AS ROTAS
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './authentication/login/login.component';
import { PaginaAcessadaComponent } from './pagina-acessada/pagina-acessada.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';

import { AuthGuard } from './guards/auth-guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'paginaAcessada', component: PaginaAcessadaComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
<<<<<<< HEAD
  { path: 'cadastroUsuario', component: CadUsuarioComponent, canActivate: [AuthGuard] }
=======
  { path: 'cadastroUsuario', component: CadastroUsuarioComponent },
>>>>>>> e779fb98a563032780700a95b0ab283d44b0196e
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
