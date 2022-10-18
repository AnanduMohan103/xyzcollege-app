import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewallfaculty',
  templateUrl: './viewallfaculty.component.html',
  styleUrls: ['./viewallfaculty.component.css']
})
export class ViewallfacultyComponent implements OnInit {

  constructor() { }

facultyData:any=[{"name":"Dhanya","dept":"cse","desig":"associate prof","dob":"12-09-1987","qual":"phd,M.E","address":"gfdhfg","mobile":"23456767"},
{"name":"Carol Jeba","dept":"cse","desig":"assisstant prof","dob":"12-10-1986","qual":"phd,M.E","address":"gfdhfg","mobile":"123445767"},
{"name":"Josphin","dept":"cse","desig":"associate prof","dob":"23-04-1989","qual":"phd,M.E","address":"gfdhfg","mobile":"6564389829"},
{"name":"Renu","dept":"cse","desig":"associate prof","dob":"30-09-1987","qual":"phd,M.E","address":"gfdhfg","mobile":"73554773"},
{"name":"Priya","dept":"cse","desig":"associate prof","dob":"17-07-1988","qual":"phd,M.E","address":"gfdhfg","mobile":"0978655"},
{"name":"Jino","dept":"cse","desig":"associate prof","dob":"08-03-1989","qual":"phd,M.E","address":"gfdhfg","mobile":"1246890"},
{"name":"Jackson","dept":"cse","desig":"associate prof","dob":"25-06-1990","qual":"phd,M.E","address":"gfdhfg","mobile":"79876457"}]
  ngOnInit(): void {
  }

}
