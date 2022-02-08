import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  lbl='Your Perfect Banking Partner'
  username:any
  password:any
  acno=""
  pswd=""

  account_details:any={
    1000:{name:"ajay", accno:1000, password:"testone",amount:5000},
    1001:{name:"vijay", accno:1001, password:"testtwo",amount:3000},
    1002:{name:"ram", accno:1002, password:"testthree",amount:7000},
    1003:{name:"ravi", accno:1003, password:"testfour",amount:10000},
}

  constructor() { }

  ngOnInit(): void {
  }

  accChange(event:any){
    this.acno=event.target.value
    // console.log(this.acno,"account number");
    
     
   }
   pwdChange(event:any){
     this.pswd=event.target.value
    //  console.log(this.pswd,"password");
     
   }

  login(a:any,p:any){
    // var accountnumber=this.acno
    // var password=this.pswd
    var accountnumber=a.value
    var password=p.value
    // console.log(a.value,p.value,"account number,password");
    
    let dataset=this.account_details
    
    if(accountnumber in dataset){
      if(password == dataset[accountnumber]['password']){
        window.alert("Login success")
      }
      else{
        window.alert("Incorrect account number or password")
      }
    }
    else{
      window.alert("Account number does not exist")
    }
  }
}
