import { Component, OnInit } from '@angular/core';

declare var jquery: any;
declare var $: any;
var images = ['#imgone', '#imgtwo', '#imgthree', '#imgfour', '#imgfive', '#imgsix', '#imgseven', '#imgeight'],
  imgIx = 0;
@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    this.imageCycle();
  }
  imageCycle() {
    (function nextImage() {
      $(images[imgIx++] || images[imgIx = 0, imgIx++]).hide().delay(500).show(1000).delay(1000).fadeOut(500, nextImage);
    })();
  }
}
