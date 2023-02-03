import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrls: ['./detail-employee.component.scss']
})
export class DetailEmployeeComponent implements OnInit {
  listOrg:Org[]=[];
  listWH!:any[];
  count:number=0;
  
  employee = new Employee();
  constructor(private testservice:TestService){};
  ngOnInit(): void {
    this.testservice.getAllOrg().subscribe(sc=>{
      this.listOrg=sc;
      //console.log(this.listOrg);
      
    })
    var id = this.testservice.idUpdate;
    this.testservice.getById(id).subscribe(sc=>{
      this.employee=sc;
      this.employee.dob=formatDate(sc.dob);
    })
    this.testservice.getByIdEmployee(id).subscribe(sc=>{
      this.listWH=sc;
      this.count=sc.length;
      //console.log(this.listWH);
    })
    //this.getNameOrg(1);
  }
  onUpdateWHClick(id:number){
    this.testservice.idWH=id;
  }
  onDeleteWHClick(id:number){
    if(confirm('Are you sure want to delete ?'))
    try {
      this.testservice.deleteWH(id).subscribe(sb=>{
        this.resetPage();
      })
    } catch (error) {
      console.log(error);
    }
  }
  onAddHWClick(id:number){
    this.testservice.idOrg=id;
  }
  onStatusClick(id:number){
    if(confirm('are you sure change status?'))
    {
      this.testservice.updateActiveWH(id).subscribe(sc=>{
        this.resetPage();
      })
    }
  }
  getNameOrg(id:number){
    var rs;
    rs = this.listOrg.find(p=>p.c_Org_Id==id);
    return rs;
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
  resetPage(){
    var id = this.testservice.idUpdate;
    this.testservice.getByIdEmployee(id).subscribe(sc=>{
      this.listWH=sc;
      this.count=sc.length;
      //console.log(this.listWH);
    })
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
  c_Org_Id!:number;
  address!:String;
  userLogin!:String;
  
}
interface Org {
  c_Org_Id:number;
  created_Date:string;
  created_User:string;
  updated_Date:string;
  updated_User:string;
  isActive:boolean;
  code:string;
  name:string
  orderValue:number;
  parent_id:number;


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
