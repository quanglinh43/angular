import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import { MatMomentDateModule } from '@angular/material-moment-adapter'

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
import { DetailEmployeeComponent } from './detail-employee/detail-employee.component';
import { AddWhComponent } from './add-wh/add-wh.component';
import { UpdateWhComponent } from './update-wh/update-wh.component';
import { AddOrgComponent } from './add-org/add-org.component';
import { UpdateOrgComponent } from './update-org/update-org.component';
import { OrgListComponent } from './org-list/org-list.component';




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
    DetailEmployeeComponent,
    AddWhComponent,
    UpdateWhComponent,
    AddOrgComponent,
    UpdateOrgComponent,
    OrgListComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTreeModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatMenuModule,
    MatTableModule,
    MatDialogModule,
    MatNativeDateModule,
    MatListModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMomentDateModule,

  ],
  providers: [
    
    //{ provide: LOCALE_ID, useValue: 'vi-VN' },
    //MatDatepickerModule,
    
    //MatNativeDateModule 
    {provide: MAT_DATE_LOCALE, useValue:'vi-VN' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
