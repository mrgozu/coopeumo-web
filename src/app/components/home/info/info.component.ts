import { Component, OnInit } from '@angular/core';
import { HomeInfoService } from '../../../services/info/home-info.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styles: [
  ]
})
export class InfoComponent implements OnInit {
  informacion;
  constructor(private info:HomeInfoService) { }

  ngOnInit(): void {
    this.informacion = this.info.info;
  }

}
