import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl:'./dashboard.component.html' ,
  styles: [
  ]
})
export class DashboardComponent implements OnInit {
  segmentos = [1,2,3,4];
  constructor() { }

  ngOnInit(): void {
  }

}
