import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from '../Services/dataservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  uname=''
  acno=''
  pswd=''


  registerForm=this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })

  constructor(private dataservice:DataserviceService,
    private router:Router,
    private fb:FormBuilder
    ) { }

  ngOnInit(): void {
  }

  register(){
    //checking errors
    // if((this.registerForm.get('uname')?.errors)){
    //   window.alert('Invalid username')
    // }
    var acno=this.registerForm.value.acno
    var passwd=this.registerForm.value.pswd
    var username=this.registerForm.value.uname
    // console.log(this.registerForm);
    if(this.registerForm.valid){
      var result=this.dataservice.register(username,acno,passwd)
    if(result){
      window.alert('Registered Successfully')
      this.router.navigateByUrl('')
    }
    else{
      window.alert('Account already exists')
    }
    }
    else{
      window.alert('Form not valid')
    }
  }

}
