import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../Services/dataservice.service';

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

  constructor(private router:Router,private dataservice:DataserviceService) { }

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

    let dataset=this.dataservice.account_details
    
    if(accountnumber in dataset){
      if(password == dataset[accountnumber]['password']){
        window.alert("Login success")
        this.router.navigateByUrl('home')
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
