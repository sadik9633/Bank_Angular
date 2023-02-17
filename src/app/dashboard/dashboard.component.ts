import { Component, OnInit, ɵisDefaultChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user=''
  acno=''
  // access date
  datedetails:any
  


  constructor(private ds:DataService,private fb:FormBuilder,private router:Router) {
    this.user=this.ds.currentUser

     // access date
     this.datedetails=new Date()
     
  }
  depositForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
    psw:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]],
    amnt:['',[Validators.required,Validators.pattern('[0-9]+')]]
  })

  withdrawForm=this.fb.group({
    acno1:['',[Validators.required,Validators.pattern('[0-9]+')]],
    psw1:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]],
    amnt1:['',[Validators.required,Validators.pattern('[0-9]+')]]
  })

  ngOnInit(): void {
    if(!localStorage.getItem("currentAcno")){
    alert('please login')
    this.router.navigateByUrl("")
    }
  }

  deposit(){
   var acno=this.depositForm.value.acno
   var psw=this.depositForm.value.psw
   var amnt=this.depositForm.value.amnt
   if(this.depositForm.valid){
   const result=this.ds.deposit(acno,psw,amnt)
   if(result){
     alert(`your account has been credited with amount ${amnt}.and the current balance is ${result}`)
   }
   else{
    alert("incurrect account number or password")
   }
  }
  else{
    alert('invalid form')
  }
  }

  withdraw(){
    var acno=this.withdrawForm.value.acno1
    var psw=this.withdrawForm.value.psw1
    var amnt=this.withdrawForm.value.amnt1
    if(this.withdrawForm.valid){
    const result=this.ds.withdraw(acno,psw,amnt)
   if(result){
     alert(`your account has been depited with amount ${amnt}.and the current balance is ${result}`)
   }
   
  }
  else{
    alert('invalid form')
  }
  }

  logout(){
    localStorage.removeItem("currentUser")
    localStorage.removeItem("currentAcno")
    this.router.navigateByUrl("")
  }
 deleteac(){
  this.acno=JSON.parse(localStorage.getItem("currentAcno") || "")
 }
cancel(){
 this.acno='' 
}

}
