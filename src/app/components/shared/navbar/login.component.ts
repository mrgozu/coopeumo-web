import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from '../../../models/usuario.model';
import {Auth} from 'aws-amplify'
import { AuthService } from '../../../services/auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private auth: AuthService) {}
  usuario: UsuarioModel;
  requiereNuevaPassword: string;
  loading = false;
  ngOnInit(): void {
    this.usuario = new UsuarioModel();
  }

  onSubmit(form:NgForm) {

    this.loading = true; 
    this.auth.signIn(this.usuario)
        .then((resp)=>{
          // console.log(resp);
          this.loading = false; 
          this.router.navigate(['dashboard']);
          this.requiereNuevaPassword = resp.challengeName;
        })
        .catch((err)=>{
          this.loading = false; 
          console.log(err)
        });


    // this.auth.sigIn(this.usuario).then((data)=>{
    //   console.log(data);
    // })
    }
    onSubmitNueva(form:NgForm){
      this.auth.changePassword(this.usuario);
         
    }


  }




  

