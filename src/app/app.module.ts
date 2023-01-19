import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';



import { ToggleComponent } from './toggle/toggle.component';
import { HREmployeeComponent } from './hr-employee/hr-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { OrgComponent } from './org/org.component';
import { Tree1Component } from './tree1/tree1.component';



@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    ToggleComponent,
    HREmployeeComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    OrgComponent,
    Tree1Component,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTreeModule,
    BrowserAnimationsModule,
    MatIconModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
