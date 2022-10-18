import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor() { }

name=""
rollno=""
adno=""
college=""
dept=""
blood=""
dob=""
pname=""
pemail=""
gname=""
gaddress=""


readValues=()=>{
  let data={
    "name":this.name,
    "rollno":this.rollno,
    "adno":this.adno,
    "college":this.college,
    "dept":this.dept,
    "blood":this.blood,
    "dob":this.dob,
    "pname":this.pname,
    "pemail":this.pemail,
    "gname":this.gname,
    "gaddress":this.gaddress
  }
  console.log(data)
  
}
  ngOnInit(): void {
  }

}
