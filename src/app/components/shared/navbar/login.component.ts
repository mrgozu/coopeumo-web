import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from '../../../models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}
  usuario: UsuarioModel;

  ngOnInit(): void {
    this.usuario = new UsuarioModel();
  }

  onSubmit(form:NgForm) {
    console.log('login');
    console.log(!form.invalid);
    
    console.log(form.controls.nombre.status);
  }
}
