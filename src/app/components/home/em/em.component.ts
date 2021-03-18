import { Component, OnInit } from '@angular/core';
import { BackApiService } from '../../../services/data/back-api.service';

@Component({
  selector: 'app-em',
  templateUrl: './em.component.html',
  styles: [
  ]
})
export class EmComponent implements OnInit {
  intervalo;  
  estacionMetereologica;
  constructor(private api:BackApiService) {
    this.api.getData()
    .then((data)=>this.estacionMetereologica=data);
   }

  ngOnInit(): void {
    this.intervalo = setInterval(()=>{
      this.api.getData()
        .then((data)=>this.estacionMetereologica=data);
    },5000)
  }

  
  
}
