import { Component, OnInit, HostListener, Inject } from '@angular/core';

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

  toggleTitle() {
    $('.title').fadeOut("slow");
  }

  toggle() {
    $('#menu').click(function () {
      $('.title').fadeToggle();
      $('.navbar').css('background-color', 'black');
    });
  }


  navBar() {
    var scroll_pos = 0;
    $(document).scroll(function () {
      scroll_pos = $(this).scrollTop();
      if (scroll_pos > 600) {
        $(".navbar").css('background-color', 'black');
      } else {
        $(".navbar").css('background-color', 'transparent');
      }
    });

  }

}