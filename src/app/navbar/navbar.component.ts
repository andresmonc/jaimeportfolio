import { Component, OnInit, HostListener } from '@angular/core';
import { Inject } from "@angular/core";
import { DOCUMENT } from "@angular/platform-browser";
import { WINDOW } from "../../services/window.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  private aboutOffset: Number;
  public sidebarActive: boolean = false;
  public initSlider: boolean = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ) { }

  ngOnInit() {
    this.aboutOffset = this.document.getElementById('about').offsetTop - 200;
  }

  toggleSidebar() {

  }

  toggle() {
    this.initSlider = true;
    if (this.sidebarActive == false) {
      this.sidebarActive = true;
    } else if (this.sidebarActive == true) {
      this.sidebarActive = false;

    }

  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = this.window.pageYOffset || this.document.documentElement.offsetTop || this.document.body.scrollTop || 0;

    if (number >= this.aboutOffset) {
      this.document.getElementById("navbar").style.backgroundColor = 'black'
      this.document.getElementById("sidebar").style.backgroundColor = 'black'
    } else {
      this.document.getElementById("navbar").style.backgroundColor = 'transparent'
      this.document.getElementById("sidebar").style.backgroundColor = 'transparent'
    }
  }

}