import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  currentUser=""
  
  account_details: any = {
    1000: { name: "ajay", accno: 1000, password: "testone", amount: 5000 },
    1001: { uname: "vijay", accno: 1001, password: "testtwo", amount: 3000 },
    1002: { uname: "ram", accno: 1002, password: "testthree", amount: 7000 },
    1003: { uname: "ravi", accno: 1003, password: "testfour", amount: 10000 },
  }

  constructor() {
    this.getDetails()
   }


  saveDetails(){
    localStorage.setItem("account_details",JSON.stringify(this.account_details))
    if(this.currentUser){
      localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
    }
  }

  getDetails(){
    if(localStorage.getItem("account_details")){
      this.account_details=JSON.parse(localStorage.getItem("account_details") || '')
    }
    if(localStorage.getItem("currentUser")){
      this.currentUser=JSON.parse(localStorage.getItem("currentUser") || '')
    }
  }

  register(name: any, accno: any, password: any) {
    let dataset = this.account_details
    if (accno in dataset) {
      return false
    }
    else {
      this.account_details[accno] = {
        name,
        accno,
        password,
        amount: 0
      }
      this.saveDetails()
      return true
    }
  }

  login(accno: any, psswd: any) {
    let dataset = this.account_details
    if (accno in dataset) {
      if (psswd == dataset[accno]['password']) {
        this.currentUser=dataset[accno]['name']
        this.saveDetails()
        return true
      }
      else {
        window.alert("Incorrect account number or password")
        return false
      }
    }
    else {
      window.alert("Account number does not exist")
      return false
    }
  }

  deposit(accno:any,pwd:any,amt:any){
    var amount=parseInt(amt)
    let data=this.account_details
    if(accno in data){
      if(pwd == data[accno]['password']){
        data[accno]['amount'] += amount
        this.saveDetails()
        return data[accno]['amount']
      }
      else{
        window.alert("Incorrect password")
        return false
      }
    }
    else{
      window.alert("Account number does not exists")
      return false
    }
  }

  withdraw(accno:any,pwd:any,amt:any){
    var amount=parseInt(amt)
    let data=this.account_details
    if(accno in data){
      if(pwd == data[accno]['password']){
        if(data[accno]['amount']>=amount){
          data[accno]['amount'] -= amount
          this.saveDetails()
          return data[accno]['amount']
        }
        else{
          return window.alert('Insufficient balance')
        }
      }
      else{
        window.alert('Incorrect password')
        return false
      }
    }
    else{
      window.alert('Account number does not exists')
      return false
    }
  }

}
