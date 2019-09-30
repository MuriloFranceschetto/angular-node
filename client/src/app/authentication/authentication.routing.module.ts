import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'singin', component: RegistroComponent},
];

@NgModule({
<<<<<<< HEAD
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
=======
    declarations: [
        LoginComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        FlexLayoutModule,
        RouterModule.forChild(routes),
        RegistroModule
    ],
    exports: [
        RouterModule
    ],
>>>>>>> release-1.0.0-joaok
})

export class AuthenticationRoutingModule {

}