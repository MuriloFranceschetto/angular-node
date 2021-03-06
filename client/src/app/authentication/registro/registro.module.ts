// Imports Angular
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';

// Imports de arquivos
import { RegistroComponent } from './registro.component';
import { RegistroModel } from './registro.model';

@NgModule({
    // declarations: [
    //     RegistroComponent
    // ],
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        FlexLayoutModule,
        MatDividerModule
    ],
    providers: [
        RegistroModel
    ]
    
})
export class RegistroModule {

}