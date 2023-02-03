import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent {
  now = new Date();
  employee = new Employee();
  listOrg!:any[];
  listOrg1!:any[];
  constructor(private testservice:TestService, private fb:FormBuilder,private router: Router){};
  ngOnInit(): void {
    var id = this.testservice.idUpdate;
    this.testservice.getById(id).subscribe(sc=>{
      this.employee=sc;
      this.employee.dob=formatDate(sc.dob);
    })
    
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
  onSaveClick(){
    this.employee.dob=formatDate(this.employee.dob);
    if(confirm('Are you want to save ?'))
    {
      this.employee.updated_Date=this.now.toISOString();
      this.employee.updated_User='linh';
      
      this.testservice.update(this.testservice.idUpdate,this.employee).subscribe(sc=>{
        
      })
      alert('Save success!');
      this.router.navigate(['']); 
    }
    
  }
  onChangeOrg(){
    //console.log(this.inforForm.value.dOB?.toString());
  }
  inforForm = this.fb.group({
    firstName: ['',[Validators.required]],
    lastName: ['',[Validators.required]],
    email: ['',[Validators.required,Validators.email]],
    telephone: [''],
    mobiphone: [''],
    address: [''],
    userLogin: [''],
    dob:['',[Validators.required]],
    department:['',[Validators.required]],


  });
  
  onSubmit () {
  }
}

class Employee  {
  hR_Employee_Id!:String;
  created_Date!:String;
  created_User!:String;
  updated_Date!:String;
  updated_User!:String;
  isActive!:Boolean;
  code!:String;
  firstName!:String;
  lastName!:String;
  dob!:String;
  email!:String;
  telephone!:String;
  mobiphone!:String;
  c_Org_Id!:Number;
  address!:String;
  userLogin!:String;
  
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
