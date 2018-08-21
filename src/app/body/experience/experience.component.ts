import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  phrase = ['DevOps', 'SDLC', 'TDD', 'Agile', 'Waterfall'];
  name: string;
  constructor() { }

  ngOnInit() {
    this.timeOut();
  }

  timeOut() {
    let count = 0;
    setInterval(() => {
      if (count === this.phrase.length) {
        count = 0;
      }
      this.name = this.phrase[count];
      count++;
    }, 1500);

  }
}
