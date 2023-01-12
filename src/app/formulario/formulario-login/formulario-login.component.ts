import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})

export class FormularioLoginComponent {

  mostrar = false

  formLogin = this.formsBuilder.group({
    nombre: ["", {
      validators: [
        Validators.required,
      ]
    }],
    correo: ["", {
      validators: [
        Validators.required,
      ]
    }],
    telefono: ["", {
      validators: [
        Validators.required,
      ]
    }],
    asunto: ["", {
      validators: [
        Validators.required,
      ]
    }],
    mensaje: ["", {
      validators: [
        Validators.required,
      ]
    }]
  })

  get nombre() { return this.formLogin.get('nombre') }
  get correo() { return this.formLogin.get('correo') }
  get telefono() { return this.formLogin.get('telefono') }
  get asunto() { return this.formLogin.get('asunto') }
  get mensaje() { return this.formLogin.get('mensaje') }


  constructor(private formsBuilder: FormBuilder) { }

  enviar() {
    this.mostrar = true
  }

}
