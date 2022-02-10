import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  account_details:any={
    1000:{name:"ajay", accno:1000, password:"testone",amount:5000},
    1001:{uname:"vijay", accno:1001, password:"testtwo",amount:3000},
    1002:{uname:"ram", accno:1002, password:"testthree",amount:7000},
    1003:{uname:"ravi", accno:1003, password:"testfour",amount:10000},
}

  constructor() { }

  register(name:any,accno:any,password:any){
      let dataset=this.account_details
      if(accno in dataset){
        return false
      }
      else{
        this.account_details[accno]={
          name,
          accno,
          password,
          amount:0
        }
        return true
      }
  }

}
