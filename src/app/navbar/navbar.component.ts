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
    this.toggle()
  }

  toggleTitle() {
    $('.title').fadeOut("slow");
  }

    toggle(){
      $('#menu').click(function () {
        $('.title').fadeToggle();
      });
    }

}