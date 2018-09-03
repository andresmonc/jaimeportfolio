import { Component, OnInit } from '@angular/core';

declare var jquery: any;
declare var $: any;



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  email() {
    let subject = $("#subject").val();
    let message = $("#message").val();
    if (!subject || !message) {
      alert('Please fill out all fields');
    }
    else {
      window.location.href = `mailto:jaimemonc@gmail.com?subject=${subject}&body=${message}`;
    }
  }
}
