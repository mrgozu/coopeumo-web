import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-seg',
  templateUrl: './seg.component.html',
  styles: [
  ]
})
export class SegComponent implements OnInit {
  @Input() numeroSegmento:number;
  constructor() { }

  ngOnInit(): void {
  }

}
