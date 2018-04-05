import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-uaeslider',
  templateUrl: './uaeslider.component.html',
  styleUrls: ['./uaeslider.component.scss']
})
export class UaesliderComponent implements OnInit {
  public carouselOne: NgxCarousel;

  constructor() { }

  ngOnInit() {
    this.carouselOne = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 600,
      interval: 3000,
      point: {
        visible: false
      },
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner'
    }
  }
  public myfunc(event: Event) {
      // carouselLoad will trigger this funnction when your load value reaches
      // it is helps to load the data by parts to increase the performance of the app
      // must use feature to all carousel
   }

}
