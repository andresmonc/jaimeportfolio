import { Component, OnInit, HostListener, Inject } from '@angular/core';
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



  constructor() { }

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

    var scroll_pos = 0;
    $(document).scroll(function () {
      scroll_pos = $(this).scrollTop();
      if (scroll_pos > 600) {
        $(".navbar").css('background-color', 'black');
        $(".sidebar").css('background-color', 'black');
        

      } else {
        $(".navbar").css('background-color', 'transparent');
        $(".sidebar").css('background-color', 'transparent');


      }
    });

  }

}