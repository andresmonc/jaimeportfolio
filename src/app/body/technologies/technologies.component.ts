import { Component, ViewChild, ViewChildren } from "@angular/core";
import { slideIn, fadeInOut } from "../../animations";
import { DragScrollComponent } from "ngx-drag-scroll";
import { EventEmitter } from "events";

@Component({
  selector: "app-technologies",
  templateUrl: "./technologies.component.html",
  styleUrls: ["./technologies.component.css"],
  animations: [slideIn, fadeInOut],
})
export class TechnologiesComponent {
  @ViewChild("nav", { read: DragScrollComponent }) ds: DragScrollComponent;

  constructor() {}
  public selectedIndex = 0;
  public hideSwipe = false;

  public icons = [
    ["devicon-java-plain-wordmark colored", "#4169e1"],
    ["devicon-go-line", "#29adbe"],
    ["devicon-nodejs-plain-wordmark colored", "#6B5B95"],
    ["devicon-git-plain-wordmark", "#F1502F"],
    ["devicon-express-original-wordmark colored", "#fdfd96"],
    ["devicon-angularjs-plain", "red"],
    ["devicon-postgresql-plain-wordmark colored", "rgb(59, 189, 92)"],
    ["devicon-docker-plain-wordmark colored", "black"],
    ["devicon-css3-plain-wordmark colored", "aliceblue"],
    ["devicon-python-plain-wordmark colored", "#4B8BBE"],
    ["devicon-mongodb-plain-wordmark", "#4DB33D"],
    ["devicon-scala-plain-wordmark colored", "#6B5B95"],
    ["devicon-typescript-plain colored", "#aliceblue"],
    ["devicon-javascript-plain colored", "black"],
    ["devicon-amazonwebservices-plain-wordmark colored", "#6B5B95"],
  ];

  hideSwipeToggle() {
    this.hideSwipe = true;
  }

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
    this.ds.indexChanged.subscribe((index) => {
      this.selectedIndex = index;
    });
    setInterval(() => {
      this.moveRight();
    }, 1500);
  }
}
