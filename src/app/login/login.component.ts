import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  loginForm=this.fb.group({
    accno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    passwd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })

  constructor(private router:Router,
    private dataservice:DataserviceService,
    private fb:FormBuilder
    ) { }

  ngOnInit(): void {
  }

  accChange(event:any){
    this.acno=event.target.value 
   }
   pwdChange(event:any){
     this.pswd=event.target.value
   }

  login(){
    // var accountnumber=this.acno
    // var password=this.pswd

    // let dataset=this.dataservice.account_details
    
    // if(accountnumber in dataset){
    //   if(password == dataset[accountnumber]['password']){
    //     window.alert("Login success")
    //     this.router.navigateByUrl('home')
    //   }
    //   else{
    //     window.alert("Incorrect account number or password")
    //   }
    // }
    // else{
    //   window.alert("Account number does not exist")
    // }
    // var accno=this.acno
    // var pwd=this.pswd
    if(this.loginForm.get('accno')?.errors){
      window.alert('Invalid form')
    }
    var acno=this.loginForm.value.accno
    var pwd=this.loginForm.value.passwd
    
    if(this.loginForm.valid){
      let reuslt=this.dataservice.login(acno,pwd)
      if(reuslt){
        window.alert('Login successfull')
        this.router.navigateByUrl('home')
      }
    }
  }
  Registerlink()
  {
    this.router.navigateByUrl('register')
  }
}
