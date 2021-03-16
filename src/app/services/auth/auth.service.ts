import { Injectable } from '@angular/core';
import {Auth} from 'aws-amplify'
import { UsuarioModel } from '../../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  async signIn(usuario: UsuarioModel):Promise<any> {
        let user = await Auth.signIn(usuario.nombre,usuario.password);
        // console.log(user);;
        return user;
    
}

  async changePassword(usuario:UsuarioModel):Promise<any>{
    console.log(usuario);
    let user =await  Auth.signIn(usuario.nombre, usuario.password)
    .then(user => {
        if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
            const { requiredAttributes } = user.challengeParam;
            Auth.completeNewPassword(
                user,               
                usuario.nuevaPassword, 
                {
                nickname: usuario.nombre

                }       
                  
                
                
            ).then(user => {
                
                console.log(user);
            }).catch(e => {
              console.log(e);
            });
        } else {
           alert('Intente nuevamente')
        }
    }).catch(e => {
        console.log(e);
    });
    

    return user;
  }


}