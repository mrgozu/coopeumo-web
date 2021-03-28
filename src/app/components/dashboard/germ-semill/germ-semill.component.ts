import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-germ-semill',
  templateUrl: './germ-semill.component.html',
  styles: [
  ]
})
export class GermSemillComponent implements OnInit {
  @Input() titulo:string;
  fechaActual = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
