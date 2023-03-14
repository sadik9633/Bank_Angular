import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

data="your perfect banking partner"

inputplaceholder="Account number"




 // userDetails:any={
  //  1000:{acno:1000,username:"anu",password:"abc123",balance:0},
  //  1001:{acno:1001,username:"amal",password:"abc123",balance:0},
  //  1003:{acno:1003,username:"arun",password:"abc123",balance:0},
  //  1004:{acno:1004,username:"akil",password:"123abc",balance:0}
// }


 constructor(private router:Router,private ds:DataService,private fb:FormBuilder) {}
//model form
 loginForm=this.fb.group({
  acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
  psw:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]
 })
 ngOnInit(): void{

 }


 login(){
 var acno=this.loginForm.value.acno
var psw=this.loginForm.value.psw
if(this.loginForm.valid){
 this.ds.login(acno,psw).subscribe
 ((result:any)=>{
  
  localStorage.setItem("currentUser",JSON.stringify(result.currentUser))
  localStorage.setItem("currentAcno",JSON.stringify(result. currentAcno))
  localStorage.setItem("token",JSON.stringify(result.token))

  alert(result.message)
  this.router.navigateByUrl('dashboard')
 },
 result=>{
  alert(result.error.message)
 })
 }
 else{
  alert('invalid form')
 }
 //login(a:any,b:any){
  //console.log(a.value);
  
    // var acno=a.value
    // var psw=b.value
  //var userDetails=this.userDetails
 //if(acno in userDetails){
   //if(psw==userDetails[acno]["password"]){
   //  alert ("login success")
   // }
   // else{
    // alert ("incurrect password")
   // }
 // }
  //else{
   // alert ("account number incurrect")
  //}

 //
 // alert('login clicked')
 //}


//acnoChange(event:any){
 // this.acno=event.target.value
  //console.log(this.acno);
  
 //}

 //pswrdChange(event:any){
  //this.psw=event.target.value
  //console.log(this.psw);
  
// }
}
}