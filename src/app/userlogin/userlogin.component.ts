import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  constructor(private myRouter:Router) { }
  username=""
  password=""
  readValues=()=>{
    let data={
      "username":this.username,
      "password":this.password
    }
    if (this.username=="admin" && this.password=="admin") {
      this.myRouter.navigate(["/nav"])
      
    } else {
      alert("invalid credential")
    }
    console.log(data)
    this.username=""
    this.password=""
  }
  ngOnInit(): void {
  }

}
