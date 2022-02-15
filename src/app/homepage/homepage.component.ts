import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../Services/dataservice.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  accno=""
  passwd=""
  amount=""

  waccno=""
  wpasswd=""
  wamount=""

  constructor(private dataservice:DataserviceService) { }

  ngOnInit(): void {
  }

  deposit(){
    var acno=this.accno
    var pwd=this.passwd
    var amt=this.amount
    var dataset=this.dataservice.deposit(acno,pwd,amt)
    if(dataset){
      window.alert('Amount'+' '+amt+' '+'credited successfully available balance is'+' '+dataset)
    }
  }

  withdraw(){
    var wacno=this.waccno
    var wpwd=this.wpasswd
    var wamt=this.wamount
    var dataset=this.dataservice.withdraw(wacno,wpwd,wamt)
    if(dataset){
      window.alert('Amount'+' '+wamt+' '+'debited successfully available balance is'+' '+dataset)
    }
  }

}
