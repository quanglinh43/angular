import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-update-wh',
  templateUrl: './update-wh.component.html',
  styleUrls: ['./update-wh.component.scss']
})
export class UpdateWhComponent implements OnInit {
  now = new Date();
  listOrg!:any[];
  listOrg1!:any[];
  wh = new WorkingHistory();
  constructor( private testservice:TestService,private fb:FormBuilder, private router: Router){}
  ngOnInit(): void {
    var idHW=this.testservice.idWH;
    this.testservice.getAllOrg().subscribe(sc=>{
      this.listOrg=sc;
    })
    this.testservice.getByIdWH(idHW).subscribe(sc=>{
      this.wh=sc;
      this.wh.from_Date=formatDate(sc.from_Date);
      this.wh.to_Date=sc.to_Date?formatDate(sc.to_Date):null;
    })
    this.testservice.getOrg().subscribe(sc=>{
      this.listOrg1=sc;
    })
    
  } 
  get f () {
    return this.inforForm.controls;
  }
  onSubmit(){}
  onSaveClick(){
    if(this.inforForm.valid)
    {
      this.wh.from_Date=formatDate(this.wh.from_Date);
    //this.wh.to_Date=formatDate(this.wh.to_Date)
    this.wh.to_Date=this.inforForm.value.toDate?formatDate((String)(this.inforForm.value.toDate)):null
    if(confirm('Are you want to save ?'))
    {
      this.wh.updated_Date=this.now.toISOString();
      this.wh.updated_User='linh';
      this.testservice.updateWH(this.testservice.idWH,this.wh).subscribe(sc=>{
        
      })
      alert('Save success!');
      this.router.navigate(['/detail']);
    }
    }
  }
  inforForm = this.fb.group({
    jobTitle: ['',[Validators.required]],
    fromDate: ['',[Validators.required]],
    toDate:[''],
    department:['',[Validators.required]],
    salary:['',[Validators.required]],
  })
}
class WorkingHistory {
  hR_WorkingHistory_Id!:number;
  created_Date!:string;
  created_User!:string;
  updated_Date!:string;
  updated_User!:string;
  isActive!:boolean;
  hR_Employee_Id!:number;
  c_Org_Id!:number;
  from_Date!:string;
  to_Date!:string|null;
  jobTitle!:string;
  salaryAmt!:number;
}
function formatDate(date:any) {
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
