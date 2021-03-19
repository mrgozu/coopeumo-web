import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
      <div class="container ">
        <app-alert ></app-alert>
        <div class="card-group ">
          <app-germ-semill class="w-25 " ></app-germ-semill> 
          <app-germ-semill class="w-25 "></app-germ-semill>    
          <app-emDashboard class="w-50 "></app-emDashboard>    
        </div>
        <div class="card-group mt-2 ">
          <app-seg *ngFor="let segmento of segmentos" [numeroSegmento]="segmento" class="w-25 " ></app-seg> 
          
        </div>
      </div>
      
      
        


  `,
  styles: [
  ]
})
export class DashboardComponent implements OnInit {
  segmentos = [1,2,3,4];
  constructor() { }

  ngOnInit(): void {
  }

}
