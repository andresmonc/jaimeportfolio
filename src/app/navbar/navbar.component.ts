import { Component, OnInit, HostListener } from '@angular/core';
import { Inject } from "@angular/core";
import { DOCUMENT } from "@angular/platform-browser";
import { WINDOW } from "../../services/window.service";

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  private aboutOffset: Number;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ) { }

  ngOnInit() {
    this.toggle();
    this.navBar();
  }

  toggleSidebar() {
    $('.sidebar').fadeOut("slow");

  }
  toggle() {
    $('#menu').click(function () {
      $('.sidebar').fadeToggle();
    });
  }


  navBar() {
    this.aboutOffset = this.document.getElementById('about').offsetTop - 200;
  }





  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = this.window.pageYOffset || this.document.documentElement.offsetTop || this.document.body.scrollTop || 0;

    if (number >= this.aboutOffset) {
      this.document.getElementById("navbar").style.backgroundColor = 'black'
    } else {
      this.document.getElementById("navbar").style.backgroundColor = 'transparent'
    }
  }

}