import { Component, OnInit } from '@angular/core';
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

  constructor(private dataservice:DataserviceService,private router:Router) { }

  ngOnInit(): void {
  }

  register(){
    var acno=this.acno
    var passwd=this.pswd
    var username=this.uname
    var result=this.dataservice.register(username,acno,passwd)
    if(result){
      window.alert('Registered Successfully')
      this.router.navigateByUrl('')
    }
    else{
      window.alert('Account already exists')
    }
  }

}
