import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  constructor() { }
  username=""
  password=""
  readValues=()=>{
    let data={
      "username":this.username,
      "password":this.password
    }
    if (this.username=="admin" && this.password=="admin") {
      this.myRouter.navigate(["/"])
      
    } else {
      alert("invalid credential")
    }
  }
  ngOnInit(): void {
  }

}
