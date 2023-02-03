import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLinkWithHref } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-add-wh',
  templateUrl: './add-wh.component.html',
  styleUrls: ['./add-wh.component.scss']
})
export class AddWhComponent implements OnInit {
  listOrg!:any[];
  listOrg1!:any[];
  constructor (private testservice:TestService, private fb:FormBuilder,private router: Router){}
  ngOnInit(): void {
    this.testservice.getAllOrg().subscribe(sc=>{
      this.listOrg=sc;
  })
  this.testservice.getOrg().subscribe(sc=>{
    this.listOrg1=sc;
  })
  }
  get f () {
    return this.inforForm.controls;
  }

  inforForm = this.fb.group({
    jobTitle: ['',[Validators.required]],
    fromDate: ['',[Validators.required]],
    toDate:[''],
    department:[this.testservice.idOrg,[Validators.required]],
    salary:['',[Validators.required]],
  })
  onAddClick(){
    try {
      var form= this.inforForm.value;
      var idEmployee= this.testservice.idUpdate;
      if(form.toDate==""||form.toDate==null)
        form.toDate=null;
      var wh:WorkingHistory = {
        "hR_WorkingHistory_Id": 0,
        "created_Date": "2023-01-01",
        "created_User": "",
        "updated_Date": "2023-01-01",
        "updated_User": "",
        "isActive": true,
        "hR_Employee_Id": idEmployee,
        "c_Org_Id": (Number)(form.department),
        "from_Date": this.formatDate((String)(form.fromDate)),
        "to_Date": form.toDate?this.formatDate((String)(form.toDate)):null,
        "jobTitle": (String)(form.jobTitle),
        "salaryAmt": (Number)(form.salary)
      }
      this.testservice.createWH(wh).subscribe(sb=>{
        alert('Add Success');
        this.router.navigate(['/detail']);  
      })
    } catch (error) {
      alert('Add fail! Please check again!');
    }
  }
  onSubmit(){
    
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
  onClear(){
    
  }
}

// interface WorkingHistory {
//   hR_WorkingHistory_Id :number;
//   created_Date:string;
//   created_User:string;
//   updated_Date:string;
//   updated_User:string;
//   isActive:boolean;
//   hR_Employee_Id:number;
//   c_Org_Id:number;
//   from_Date:string;
//   to_Date:string;
//   jobTitle:string;
//   salaryAmt:number;
// }
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