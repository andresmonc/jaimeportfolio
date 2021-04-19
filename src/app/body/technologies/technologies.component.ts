import { Component, ViewChild, ViewChildren } from "@angular/core";
import { slideIn, fadeInOut } from "../../animations";
import { DragScrollComponent } from "ngx-drag-scroll";

@Component({
  selector: "app-technologies",
  templateUrl: "./technologies.component.html",
  styleUrls: ["./technologies.component.css"],
  animations: [slideIn, fadeInOut],
})
export class TechnologiesComponent {
  @ViewChild("nav", { read: DragScrollComponent }) ds: DragScrollComponent;

  constructor() {}
  public selectedIndex: number = 0;
  public hideSwipe: boolean = false;
  private intervalID: NodeJS.Timer;

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

  hideSwipeToggle(): void {
    this.hideSwipe = true;
  }

  moveLeft(): void {
    this.ds.moveLeft();
  }

  moveRight(): void {
    this.ds.moveRight();
  }

  moveTo(index): void {
    this.ds.moveTo(index);
  }

  resetCarousel(): void {
    this.moveTo(0);
    this.scrollCarousel();
  }

  scrollCarousel(): void {
    this.stopCarousel();
    this.intervalID = setInterval(() => {
      if (this.ds.currIndex == this.icons.length - 1) {
        this.moveTo(0);
      } else {
        this.moveRight();
      }
    }, 1500);
  }

  stopCarousel(): void {
    clearInterval(this.intervalID);
  }

  tempStopCarousel(): void {
    this.stopCarousel();
    setTimeout(() => {
      this.scrollCarousel();
    }, 5000);
  }

  interaction(): void {
    console.log("I've been interacted with");
    this.stopCarousel;
    this.hideSwipeToggle();
    this.tempStopCarousel();
  }

  ngAfterViewInit(): void {
    this.ds.reachesRightBound.subscribe((b) => {
      if (b) {
        this.stopCarousel();
        setTimeout(() => {
          this.resetCarousel();
        }, 5000);
      }
    });
    this.ds.indexChanged.subscribe((index) => {
      this.selectedIndex = index;
    });
    this.scrollCarousel();
  }
}
