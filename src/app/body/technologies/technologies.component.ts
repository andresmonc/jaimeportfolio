import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {
  pictures = ['../../../assets/HTML5_Logo.svg', '../../../assets/nodeJS.png', '../../../assets/angular.svg',
    '../../../assets/bootstrap.png', '../../../assets/css3.svg', '../../../assets/firebase.png',
    '../../../assets/gitlogo.png', '../../../assets/jiralogo.svg', '../../../assets/oracle.png',
    '../../../assets/mongo.svg', '../../../assets/jquery.png'];
  img: string;
  constructor() { }

  ngOnInit() {
    this.timeOut();
  }

  timeOut() {
    let count = 0;
    setInterval(() => {
      if (count === this.pictures.length) {
        count = 0;
      }
      this.img = this.pictures[count];
      count++;
    }, 1500);

  }
}
