import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addfaculty',
  templateUrl: './addfaculty.component.html',
  styleUrls: ['./addfaculty.component.css']
})
export class AddfacultyComponent implements OnInit {

  constructor() { }

  name=""
  dept=""
  desig=""
  dob=""
  qual=""
  address=""
  mobile=""

  readValues=()=>{
    let data={
      "name":this.name,
      "dept":this.dept,
      "desig":this.desig,
      "dob":this.dob,
      "qual":this.qual,
      "address":this.address,
      "mobile":this.mobile
    }
    console.log(data)
    
  }

  ngOnInit(): void {
  }

}
