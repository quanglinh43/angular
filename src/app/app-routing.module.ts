import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddOrgComponent } from './add-org/add-org.component';
import { AddWhComponent } from './add-wh/add-wh.component';
import { DetailEmployeeComponent } from './detail-employee/detail-employee.component';
import { HREmployeeComponent } from './hr-employee/hr-employee.component';
import { OrgListComponent } from './org-list/org-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UpdateOrgComponent } from './update-org/update-org.component';
import { UpdateWhComponent } from './update-wh/update-wh.component';

const routes: Routes = [
  {path:'',component: HREmployeeComponent},
  {path:'list',component: HREmployeeComponent},
  {path:'add',component:AddEmployeeComponent},
  {path:'update',component:UpdateEmployeeComponent},
  {path:'detail',component:DetailEmployeeComponent},
  {path:'add-wh',component:AddWhComponent},
  {path:'update-wh',component:UpdateWhComponent},
  {path:'add-org', component:AddOrgComponent},
  {path:'update-org', component: UpdateOrgComponent},
  {path:'list-org',component:OrgListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
