import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { LoginComponent } from './login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {
  
  authenticated= localStorage.getItem('isAuthentic');
  constructor(private auth: AuthService) { }
  ngOnInit(): void {
    console.log(this.authenticated);
  }

  disconect(){
    this.auth.signOut();
  }
  recieveStatus($event){
    this.authenticated =$event;
    console.log('recieved'+ this.authenticated);
  }

}
