import { Component, OnInit } from '@angular/core';
import { slideIn, fadeInOut } from '../../animations';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss'],
  animations: [
    slideIn, fadeInOut
  ]
})
export class TechnologiesComponent implements OnInit {

  private counter: number = 0;
  public imgArray: Array<boolean> = [false, false, false, false, false, false, false, false];

  constructor() { }

  ngOnInit() {
    setInterval(this.imgCycle, 3000)
  }

  imgCycle = () => {
    this.imgArray[this.counter - 1] = false;
    this.imgArray[this.counter] = true;
    if (this.counter == 0) {
      this.imgArray[7] = false;
    } else if (this.counter == 7) {
      this.counter = -1
    }
    this.counter++

  }

}
