import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddWhComponent } from './add-wh/add-wh.component';
import { DetailEmployeeComponent } from './detail-employee/detail-employee.component';
import { HREmployeeComponent } from './hr-employee/hr-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UpdateWhComponent } from './update-wh/update-wh.component';

const routes: Routes = [
  {path:'',component: HREmployeeComponent},
  {path:'list',component: HREmployeeComponent},
  {path:'add',component:AddEmployeeComponent},
  {path:'update',component:UpdateEmployeeComponent},
  {path:'detail',component:DetailEmployeeComponent},
  {path:'add-wh',component:AddWhComponent},
  {path:'update-wh',component:UpdateWhComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
