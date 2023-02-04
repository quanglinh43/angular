import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ngbCarouselTransitionOut } from '@ng-bootstrap/ng-bootstrap/carousel/carousel-transition';
import { TestService } from '../test.service';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddOrgComponent } from '../add-org/add-org.component';
import { AddWhComponent } from '../add-wh/add-wh.component';
import { AddWhPComponent } from '../add-wh-p/add-wh-p.component';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
  
})
export class AddEmployeeComponent implements OnInit {
  now = new Date();
  listOrg1!:any[];
  listOrg!:any[];
  listWH:WorkingHistory[]=[];
  count:number=0;
  
  date='';
  constructor(private testservice:TestService, private fb:FormBuilder,private router: Router,public dialog: MatDialog){
  
  };
  ngOnInit(): void {
    this.testservice.getAllOrg().subscribe(sc=>{
      this.listOrg=sc;
    })
    this.testservice.getOrg().subscribe(sc=>{
      this.listOrg1=sc;
    })
    //console.log(this.f.email.errors);
  }

  get f () {
    return this.inforForm.controls;
  }
  inforForm = this.fb.group({
    firstName: ['',[Validators.required]],
    lastName: ['',[Validators.required]],
    email: ['',[Validators.required,Validators.email]],
    telephone: [''],
    mobiphone: [''],
    address: [''],
    userLogin: [''],
    dOB:['',[Validators.required]],
    department:['',[Validators.required]],


  });
  onChangeOrg(){
    //console.log(this.inforForm.value.dOB?.toString());
  }
  onAddHWClick(){
    const dialogRef = this.dialog.open(AddWhPComponent, {
      height: '550px',
      width: '1000px',
      position: {right:'360px',top:'110px',bottom:'',left:''},
      data:{
        
      },
    });
    dialogRef.afterClosed().subscribe(sc=>{
      
      if(sc)
      {
        console.log(sc)
        console.log(this.listOrg)
        this.listWH.unshift(sc);
        this.count=this.listWH.length;  
        console.log(this.listWH);
        this.inforForm.value.department=sc.c_Org_Id;
      }
    })
  }
  onStatusClick(id:number){

  }
  onUpdateWHClick(id:number){

  }
  onDeleteWHClick(id:number){

  }
  onSubmit () {
    var form= this.inforForm.value;
    if(this.inforForm.valid)
    {
      var employee:IEmployee ={
        "hR_Employee_Id": 0,
        "created_Date": this.now.toISOString(),
        "created_User":"linh",
        "updated_Date":this.now.toISOString(),
        "updated_User":"linh",
        "isActive": true,
        "code":"",
        "firstName":(String)(form.firstName),
        "lastName": (String)(form.lastName),
        "dob":formatDate((String)(form.dOB)),
        "email":(String)(form.email),
        "telephone":(String)(form.telephone),
        "mobiphone":(String)(form.mobiphone),
        "c_Org_Id":(Number)(form.department),
        "address":(String)(form.address),
        "userLogin":(String)(form.userLogin),
      }
      try {
        this.testservice.add(employee).subscribe(sb=>{
          alert('Add Success');
          this.router.navigate(['']); 
        })
  
        //console.log(employee);
      } catch (error) {
        alert('Add fail! Please check again!');
      }
    }
    
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
  formatDateTable(date:any) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
  
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
  
    return [day,month,year].join('/');
  }
  getNameOrg(id:number){
    var org = this.listOrg.find(p=>p.c_Org_Id==id);
    return org;
  }
}


interface IEmployee {
  hR_Employee_Id:number;
  created_Date:string;
  created_User:string;
  updated_Date:string;
  updated_User:string;
  isActive:boolean;
  code:string;
  firstName:string;
  lastName:string;
  dob:string;
  email:string;
  telephone:string;
  mobiphone:string;
  c_Org_Id:number;
  address:string;
  userLogin:string;
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
