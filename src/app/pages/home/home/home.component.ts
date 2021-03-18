import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-carousel></app-carousel>
    <app-em></app-em>
    <app-info></app-info>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
