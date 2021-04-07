import { Component,ViewChild,ViewChildren } from '@angular/core';
import { slideIn, fadeInOut } from '../../animations';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss'],
  animations: [
    slideIn, fadeInOut
  ]
})

export class TechnologiesComponent {
  @ViewChild('nav', {read: DragScrollComponent}) ds: DragScrollComponent;

  constructor() { }
  public selectedIndex = 0;
  public cookies = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();


  }

  moveTo(index) {
    this.ds.moveTo(index);
  }

  ngAfterViewInit() {
    this.ds.indexChanged.subscribe(index => {
      this.selectedIndex = index;
    })
  }

}
