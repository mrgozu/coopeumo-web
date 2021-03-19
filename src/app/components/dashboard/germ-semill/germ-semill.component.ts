import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-germ-semill',
  templateUrl: './germ-semill.component.html',
  styles: [
  ]
})
export class GermSemillComponent implements OnInit {
  fechaActual = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
