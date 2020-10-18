import { Component, OnInit } from '@angular/core';
import countries from './_file/countries.json';
interface students {
  id: Number;
  
  name: String;
  email: String;
  message: String;
}

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  
  constructor() { }
  students: students[] = [
    {
      id: 1,
      
      name: "Hardik",
      email: "hardik@gmail.com",
      message: "you have an call related to something",
    
    },
    {
      id: 2,
      name: "Paresh",
      email: "Paresh@gmail.com",
      message: "urgent work please call"
    },
    {
      id: 3,
      name: "Kiran",
      email: "kiran@gmail.com",
      message: "guess work time are there for the benefits"
    },
    {
      id: 4,
      
      name: "Mahesh",
      email: "mahesh@gmail.com",
      message: "she is the current way to do so the function"
    },
    {
      id: 5,
      name: "Karan",
      email: "karan@gmail.com",
      message: "she is the talented boy and he is doing something"
    },
  ]

  //countryList:{name:string, code:string}[] = countries;
  

  ngOnInit(): void {
  }

}
