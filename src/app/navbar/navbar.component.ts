import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public fadeWidget: boolean = false;

  constructor() { }

  ngOnInit() {

  }


  @HostListener("window:scroll", [])
  onWindowScroll() {



    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 950) {
      this.fadeWidget = true;

    }
    else if (this.fadeWidget && number < 950) {
      this.fadeWidget = false;
    }


  }

}