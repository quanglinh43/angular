import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrgListComponent } from '../org-list/org-list.component';
import { TestService } from '../test.service';

@Component({
  selector: 'app-update-org',
  templateUrl: './update-org.component.html',
  styleUrls: ['./update-org.component.scss']
})
export class UpdateOrgComponent implements OnInit {
  now = new Date();
  listOrg1!:any[];
  org = new Org();
  constructor(private testservice:TestService,private fb:FormBuilder ,public dialog: MatDialog,
    public dialogRef: MatDialogRef<OrgListComponent>,@Inject(MAT_DIALOG_DATA) public data:any){}
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
    this.testservice.getOrgById(this.data.id).subscribe(sc=>{
      this.org=sc
    })
  }
  onSubmit(){
    if(this.inforForm.valid)
    {
      if(confirm('Are you want to save ?'))
    {
      this.org.updated_Date=this.now.toISOString();
      this.org.updated_User='linh';
      if (this.org.parent_Id==null)
        this.org.parent_Id=0;
      this.testservice.updateOrg(this.data.id,this.org).subscribe(sc=>{
        alert('Save success!');
        this.dialogRef.close();
      })
      
    }
    }
    
  }
  onCloseClick(): void {
    this.dialogRef.close();
  }
}

class Org {
  c_Org_Id!:number;
  created_Date!:string;
  created_User!:string;
  updated_Date!:string;
  updated_User!:string;
  isActive!:boolean;
  code!:string;
  name!:string;
  orderValue!:number;
  parent_Id!:number;
}
