import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioLoginComponent } from './formulario-login/formulario-login.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormularioLoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    FormularioLoginComponent
  ]
})
export class FormularioModule { }
