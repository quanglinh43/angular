import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { OrgListComponent } from '../org-list/org-list.component';
import { TestService } from '../test.service';

@Component({
  selector: 'app-add-org',
  templateUrl: './add-org.component.html',
  styleUrls: ['./add-org.component.scss']
})
export class AddOrgComponent implements OnInit {
  

listOrg1!:any[];
constructor(private testservice:TestService,private fb:FormBuilder ,public dialog: MatDialog,public dialogRef: MatDialogRef<OrgListComponent>){}
inforForm = this.fb.group({
  name: ['',[Validators.required]],
  code: ['',[Validators.required]],
  orderValue:['',[Validators.required]],
  parent_Id:['']
})
get f () {
  return this.inforForm.controls;
}
ngOnInit(): void {
  this.testservice.getOrg().subscribe(sc=>{
    this.listOrg1=sc;
  })
}
onSubmit(){
  var form= this.inforForm.value;
  if(this.inforForm.valid)
  {
    var org:Org={
      "c_Org_Id": 0,
      "created_Date": "2023-02-01T01:25:24.476Z",
      "created_User": "",
      "updated_Date": "2023-02-01T01:25:24.476Z",
      "updated_User": "",
      "isActive": true,
      "code": (String)(form.code),
      "name": (String)(form.name),
      "orderValue": (Number)(form.orderValue),
      "parent_Id": (Number)(form.parent_Id),
    }
    try {
      this.testservice.createOrg(org).subscribe(sb=>{
        alert('Add Success');
        this.dialogRef.close();
      })
      
    } catch (error) {
      alert('Add fail! Please check again!');
    }
  }
  
}
onCloseClick(): void {
  this.dialogRef.close();
}
}

interface Org {
  c_Org_Id:number;
  created_Date:string;
  created_User:string;
  updated_Date:string;
  updated_User:string;
  isActive:boolean;
  code:string;
  name:string;
  orderValue:number;
  parent_Id:number;
}

