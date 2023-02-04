import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { TestService } from '../test.service';

@Component({
  selector: 'app-add-wh-p',
  templateUrl: './add-wh-p.component.html',
  styleUrls: ['./add-wh-p.component.scss']
})
export class AddWhPComponent implements OnInit {
  listOrg1!:any[];
  constructor(private testservice:TestService ,private fb:FormBuilder,public dialog: MatDialog,public dialogRef: MatDialogRef<AddEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data:WorkingHistory,){}
  
  inforForm = this.fb.group({
    hR_WorkingHistory_Id:[0],
    created_Date:[''],
    created_User:[''],
    updated_Date:[''],
    updated_User:[''],
    hR_Employee_Id:[''],
    jobTitle: [this.data.jobTitle,[Validators.required]],
    from_Date: ['',[Validators.required]],
    to_Date:[''],
    c_Org_Id:['',[Validators.required]],
    salaryAmt:['',[Validators.required]],
    isActive:[true],

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

  }
  onAddClick(){
    if(this.inforForm.valid)
    {
      this.inforForm.value.from_Date=this.formatDate(this.inforForm.value.from_Date);
      this.inforForm.value.to_Date=this.formatDate(this.inforForm.value.to_Date);
      this.dialogRef.close(this.inforForm.value);
    }
    
  }
  onCloseClick(){
    this.dialogRef.close();
  }
  formatDate(date:any) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
  
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
  
    return [year, month, day].join('-');
  }
}
interface WorkingHistory {
  hR_WorkingHistory_Id:number;
  created_Date:string;
  created_User:string;
  updated_Date:string;
  updated_User:string;
  isActive:boolean;
  hR_Employee_Id:number;
  c_Org_Id:number;
  from_Date:string;
  to_Date:string|null;
  jobTitle:string;
  salaryAmt:number;
}
