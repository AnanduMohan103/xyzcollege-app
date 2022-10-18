import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewall-student',
  templateUrl: './viewall-student.component.html',
  styleUrls: ['./viewall-student.component.css']
})
export class ViewallStudentComponent implements OnInit {

  constructor() { }


studentData:any=[{"name":"Arun","rollno":"54","adno":"1245","college":"TKMM College","dept":"ComputerScience & Engineering","blood":"A+","dob":"23-06-1999","pname":"Kumar","pemail":"kumar116@gmail.com","gnname":"Mini","gaddress":"xyz"},
{"name":"Sibin","rollno":"55","adno":"1246","college":"MSM College","dept":"ComputerScience & Engineering","blood":"O+","dob":"23-06-1999","pname":"Sebastian","pemail":"sebastian@gmail.com","gnname":"anjali","gaddress":"xyz"},
{"name":"Nimesh","rollno":"56","adno":"1235","college":"SN College","dept":"ComputerScience & Engineering","blood":"A+","dob":"02-04-1999","pname":"Mathew","pemail":"mathew04@gmail.com","gnname":"mary","gaddress":"xyz"},
{"name":"Akarsh","rollno":"41","adno":"1223","college":"Bishop More College","dept":"ComputerScience & Engineering","blood":"B+","dob":"03-06-1999","pname":"Sathyan","pemail":"sathyan34@gmail.com","gnname":"urmila","gaddress":"xyz"},
{"name":"Arun Raj","rollno":"42","adno":"1267","college":"Sree Buddha College","dept":"ComputerScience & Engineering","blood":"A+","dob":"23-12-1999","pname":"raju","pemail":"raju016@gmail.com","gnname":"renu","gaddress":"xyz"},
{"name":"Ashraf","rollno":"43","adno":"1212","college":"Sree Gokulam College","dept":"ComputerScience & Engineering","blood":"AB+","dob":"23-07-2000","pname":"jalaludin","pemail":"jalal01@gmail.com","gnname":"rasiya","gaddress":"xyz"},
{"name":"Muzammil","rollno":"44","adno":"1205","college":"KVM College","dept":"ComputerScience & Engineering","blood":"A+","dob":"23-06-2000","pname":"shajahan","pemail":"shajahan009@gmail.com","gnname":"ramlath","gaddress":"xyz"},
{"name":"Tibin","rollno":"45","adno":"1230","college":"Mar Ephream College","dept":"ComputerScience & Engineering","blood":"AB+","dob":"20-04-1999","pname":"Shibu","pemail":"shibu309@gmail.com","gnname":"Reshma","gaddress":"xyz"}, 
{"name":"Robin","rollno":"46","adno":"1210","college":"Mar Ehream College","dept":"ComputerScience & Engineering","blood":"AB-","dob":"17-06-2000","pname":"Roy","pemail":"royk7@gmail.com","gnname":"Jini","gaddress":"xyz"},
{"name":"Rahul","rollno":"47","adno":"1240","college":"Amal Jyothi College","dept":"ComputerScience & Engineering","blood":"O+","dob":"12-12-2000","pname":"raj","pemail":"raju87@gmail.com","gnname":"rekha","gaddress":"xyz"},]
  ngOnInit(): void {
  }

}
