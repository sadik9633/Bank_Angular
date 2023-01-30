import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

data="your perfect banking partner"

inputplaceholder="Account number"

// intialasation
acno='' //or acno:any

psw=''

userDetails:any={
  1000:{acno:1000,username:"anu",password:"abc123",balance:0},
  1001:{acno:1001,username:"amal",password:"abc123",balance:0},
  1003:{acno:1003,username:"arun",password:"abc123",balance:0},
  1004:{acno:1004,username:"akil",password:"123abc",balance:0}
  
}

 constructor() {}

 ngOnInit(): void{

 }

 login(){
  alert('login clicked')
 }

 acnoChange(event:any){
  this.acno=event.target.value
  console.log(this.acno);
  
 }

 pswrdChange(event:any){
  this.psw=event.target.value
  console.log(this.psw);
  
 }

}
