import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  getValues(val){
    let user=val.user;
    let email=val.email;
    let name="routerLink";
    let a=document.getElementById("val");
    if(user===""){
      alert("User Field Can't be Blank");
      return false;
    }
    else if(user.length<3){
      alert("Minimum 4 Characters are required");
      return false;
    }
    else if(email===""){
      alert("Email can't be blank");
      return false;
    }
    else if(!email.includes("@")){
      alert("Please use @ in email");
      return false;
    }else{
      // a.setAttribute(name,"nav");
      this.router.navigate(['nav']);
      return true;
    }


  }


  ngOnInit(): void {
  }

}
