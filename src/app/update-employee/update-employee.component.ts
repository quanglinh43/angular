import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TestService } from '../test.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent {
  now = new Date();
  employee = new Employee();

  constructor(private testservice:TestService, private fb:FormBuilder){};
  ngOnInit(): void {
    console.log(this.testservice.idUpdate);
    var id = this.testservice.idUpdate;
    this.testservice.getById(id).subscribe(sc=>{
      this.employee=sc;
      console.log(this.employee);
    })
  }
  onSaveClick(){
    if(confirm('Are you want to save ?'))
    {
      this.employee.updated_Date=this.now.toISOString();
      this.employee.updated_User='linh';
      this.testservice.update(this.testservice.idUpdate,this.employee).subscribe(sc=>{
        
      })
      alert('Save success!');
      
    }
    
  }
  inforForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    email: [''],
    telephone: [''],
    mobiphone: [''],
    address: [''],
    userLogin: [''],


  });
  onSubmit () {
    // var form= this.inforForm.value;
    // var employee:IEmployee ={
    //   "hR_Employee_Id": 0,
    //   "created_Date": "2023-01-13T09:21:06.497",
    //   "created_User":"linh",
    //   "updated_Date":"2023-01-13T09:21:06.497",
    //   "updated_User":"linh",
    //   "isActive": true,
    //   "code":"",
    //   "firstName":(String)(form.firstName),
    //   "lastName": (String)(form.lastName),
    //   "dob":"2023-01-13T09:54:16.070Z",
    //   "email":(String)(form.email),
    //   "telephone":(String)(form.telephone),
    //   "mobiphone":(String)(form.mobiphone),
    //   "c_Org_Id":2,
    //   "address":(String)(form.address),
    //   "userLogin":(String)(form.userLogin),
    // }
    // try {
    //   this.testservice.add(employee).subscribe(sb=>{
    //     alert('Add Success');
        
    //   })
    //   this.inforForm.reset();
    // } catch (error) {
    //   console.log(error);
    // }
    // console.log(this.employee);
    

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
