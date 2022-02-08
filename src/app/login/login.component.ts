import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  lbl='Your Perfect Banking Partner'
  username:any
  password:any
  account="Account number please"
  acno=""
  pswd=""

  account_details:any={
    1000:{name:"ajay", accno:1000, password:"testone",amount:5000},
    1001:{name:"vijay", accno:1001, password:"testtwo",amount:3000},
    1002:{name:"ram", accno:1002, password:"testthree",amount:7000},
    1003:{name:"ravi", accno:1003, password:"testfour",amount:10000},
}

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  accChange(event:any){
    this.acno=event.target.value 
   }
   pwdChange(event:any){
     this.pswd=event.target.value
   }

  login(){
    var accountnumber=this.acno
    var password=this.pswd

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
  Registerlink()
  {
    this.router.navigateByUrl('register')
  }
}
