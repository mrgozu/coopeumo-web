import { Component, OnInit } from '@angular/core';
import { DataEmModel } from '../../../models/dataEm.model';
import { BackApiService } from '../../../services/data/back-api.service';

@Component({
  selector: 'app-emDashboard',
  templateUrl: './em.component.html',
  styles: [
  ]
})
export class EmDashComponent implements OnInit {

  intervalo;  
  estacionMetereologica = new DataEmModel().epoch;
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
  ngOnDestroy(): void {
 
    clearInterval(this.intervalo);
    
  }


}
