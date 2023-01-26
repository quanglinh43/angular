import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ngbCarouselTransitionOut } from '@ng-bootstrap/ng-bootstrap/carousel/carousel-transition';
import { TestService } from '../test.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  now = new Date();
  listOrg!:any[];
  constructor(private testservice:TestService, private fb:FormBuilder){};
  ngOnInit(): void {
    this.testservice.getAllOrg().subscribe(sc=>{
      this.listOrg=sc;
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
  onSubmit () {
    var form= this.inforForm.value;
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
      "dob":(String)(form.dOB),
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
        
      })
      this.inforForm.reset();
    } catch (error) {
      alert('Add fail! Please check again!');
    }
    
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