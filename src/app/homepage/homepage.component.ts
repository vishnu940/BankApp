import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataserviceService } from '../Services/dataservice.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  accno = ""
  passwd = ""
  amount = ""

  waccno = ""
  wpasswd = ""
  wamount = ""

  depositForm = this.fb.group({
    accno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    passwd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    amount: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  })

  withdrawForm = this.fb.group({
    waccno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    wpasswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    wamount: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  })

  Username=this.dataservice.currentUser

  constructor(private dataservice: DataserviceService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  deposit() {
    // if(this.depositForm.get('accno')?.errors){
    //   window.alert('Invalid form')
    // }
    var acno = this.depositForm.value.accno
    var pwd = this.depositForm.value.passwd
    var amt = this.depositForm.value.amount
    if (this.depositForm.valid) {
      var dataset = this.dataservice.deposit(acno, pwd, amt)
      if (dataset) {
        window.alert('Amount' + ' ' + amt + ' ' + 'credited successfully available balance is' + ' ' + dataset)
      }
    }
    else {
      window.alert('Invalid form')
    }
  }

  withdraw() {
    var wacno = this.withdrawForm.value.waccno
    var wpwd = this.withdrawForm.value.wpasswd
    var wamt = this.withdrawForm.value.wamount
    if (this.withdrawForm.valid) {
      var dataset = this.dataservice.withdraw(wacno, wpwd, wamt)
      if (dataset) {
        window.alert('Amount' + ' ' + wamt + ' ' + 'debited successfully available balance is' + ' ' + dataset)
      }
    }
    else{
      window.alert('Invalid form')
    }
  }

}
