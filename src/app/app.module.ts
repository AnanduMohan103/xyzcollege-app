import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { AddfacultyComponent } from './addfaculty/addfaculty.component';
import { ViewallStudentComponent } from './viewall-student/viewall-student.component';
import { FormsModule } from '@angular/forms';
import { ViewallfacultyComponent } from './viewallfaculty/viewallfaculty.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes=[
  {
    path:"nav",component:NavbarComponent
  },
  {
    path:"",component:UserloginComponent
  },
  {
    path:"student",component:AddstudentComponent
  },
  {
    path:"view",component:ViewallStudentComponent
  },
  {
    path:"faculty",component:AddfacultyComponent
  },
  {
    path:"viewfaculty",component:ViewallfacultyComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    UserloginComponent,
    NavbarComponent,
    AddstudentComponent,
    AddfacultyComponent,
    ViewallStudentComponent,
    ViewallfacultyComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
