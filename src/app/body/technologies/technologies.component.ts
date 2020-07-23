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

  constructor() { }

  ngOnInit() {
  }

}
