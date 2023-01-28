import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TestService } from '../test.service';

@Component({
  selector: 'app-update-wh',
  templateUrl: './update-wh.component.html',
  styleUrls: ['./update-wh.component.scss']
})
export class UpdateWhComponent implements OnInit {
  now = new Date();
  listOrg!:any[];
  wh = new WorkingHistory();
  constructor( private testservice:TestService,private fb:FormBuilder){}
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
    
  } 
  get f () {
    return this.inforForm.controls;
  }
  onSubmit(){}
  onSaveClick(){
    if(confirm('Are you want to save ?'))
    {
      this.wh.updated_Date=this.now.toISOString();
      this.wh.updated_User='linh';
      this.wh.to_Date=this.inforForm.value.toDate?(String)(this.inforForm.value.toDate):null
      this.testservice.updateWH(this.testservice.idWH,this.wh).subscribe(sc=>{
        
      })
      alert('Save success!');
      
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
