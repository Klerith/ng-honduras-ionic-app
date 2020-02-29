import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.scss'],
})
export class TarjetasComponent implements OnInit {

  slideOpts = {
    slidesPerView: 1.1,
  }

  constructor() { }

  ngOnInit() {}

}
