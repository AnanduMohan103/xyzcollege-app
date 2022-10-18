import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddstudentComponent } from './addstudent/addstudent.component';

@NgModule({
  declarations: [
    AppComponent,
    UserloginComponent,
    NavbarComponent,
    AddstudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
