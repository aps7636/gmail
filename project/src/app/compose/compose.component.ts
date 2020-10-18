import { Component, OnInit } from '@angular/core';
import { RequiredValidator } from '@angular/forms';
@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {
compose:string;
allMail=[];

list=[];
sendJson={

    mail:"",
   subject:"",
    email:"",
    compose:"",
}

emailVal:any;
  getValues(val){    
  //console.log(this.sendJson);
   this.allMail.push(this.sendJson);
   console.log(this.allMail);
    let mail=val.mail;
    let email=val.email;
    let subject=val.subject;
    let compose=val.compose;
    //console.log(subject);

    //console.log(mail);
    //console.log(email);
    if(mail===""){
      alert("mail must be filled");
      return false;
    
    }
    else if(!mail.includes("@")){
      alert("Please use @ in email");
      return false;
    }
    else if (email==="")
    {
      alert("email must be included");
    }
    else if (!email.includes("@")){
      alert("must include @");
    }
    else{
      alert("data sucess");
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
