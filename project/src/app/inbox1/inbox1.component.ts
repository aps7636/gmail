import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox1',
  templateUrl: './inbox1.component.html',
  styleUrls: ['./inbox1.component.css']
})
export class Inbox1Component implements OnInit {


  constructor() { }
  
  myfun(){
    document.getElementById("text").innerHTML="MessageREade";
  }

  ngOnInit(): void {
  }

}
