import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from '../../../models/usuario.model';
import { AuthService } from '../../../services/auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnInit {
  
  @Output() status = new EventEmitter<string>();
  authenticated =  localStorage.getItem('isAuthentic')  || 'false';
  
  usuario: UsuarioModel;
  requiereNuevaPassword: string;
  loading = false;
  
  constructor(private router: Router, private auth: AuthService) {
  }
  
  ngOnInit(): void {
    this.usuario = new UsuarioModel();
  }

  onSubmit(form:NgForm) {
    
    this.loading = true; 
    this.auth.signIn(this.usuario)
        .then((resp)=>{
          // console.log(resp);
          this.loading = false;
          localStorage.setItem('isAuthentic', 'true'); 
          this.status.emit(this.authenticated)

          this.router.navigate(['dashboard']);          
          this.requiereNuevaPassword = resp.challengeName;
          if (this.requiereNuevaPassword!= 'NEW_PASSWORD_REQUIRED'){
            this.authenticated =  localStorage.getItem('isAuthentic');
          this.status.emit(this.authenticated)
            
          }
          
        })
        .catch((err)=>{
          localStorage.setItem('isAuthentic', 'false'); 
          this.status.emit(this.authenticated)
          this.loading = false; 
          alert(err.message)
        });


    // this.auth.sigIn(this.usuario).then((data)=>{
    //   console.log(data);
    // })
    }
    onSubmitNueva(form:NgForm){
      this.auth.changePassword(this.usuario)
          .then(()=>{
            this.authenticated =  localStorage.getItem('isAuthentic');
            this.status.emit(this.authenticated)
     });
   
    }
    disconect(){
      this.usuario.nombre = '';
      this.usuario.password = '';
      this.usuario.nuevaPassword = ''
      this.auth.signOut()
          .then(()=>{
            this.authenticated =  localStorage.getItem('isAuthentic');
            this.status.emit(this.authenticated)
          });
    }


  }




  

