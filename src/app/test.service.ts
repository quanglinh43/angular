import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import {  Observable, throwError,BehaviorSubject, of  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  now = new Date();

  idUpdate!:number;
  idWH!:number;
  idOrg!:number;

  

  constructor(private httpClient : HttpClient) { }
  getList(page:number=1,size:number=10) : Observable<any> {
    
      return this.httpClient.get('https://localhost:44332/api/HR_Employee/'+page+','+size+'');
      
  }
  getAll():Observable<any>{
     return this.httpClient.get('https://localhost:44332/api/HR_Employee');
  }

  getById(id:number):Observable<any>{
    return this.httpClient.get('https://localhost:44332/api/HR_Employee/'+id+'');
 }
  add(employee:IEmployee):Observable<any>{
    return this.httpClient.post('https://localhost:44332/api/HR_Employee',employee);
  }
  update(id:number, employee:any):Observable<any>{
    return this.httpClient.put('https://localhost:44332/api/HR_Employee/'+id+'',employee);
  }
  updateActive(id:number):Observable<any>{
    return this.httpClient.put('https://localhost:44332/api/HR_Employee?id='+id+'','');
  }
  delete(id:number):Observable<any>{
    return this.httpClient.delete('https://localhost:44332/api/HR_Employee/'+id+'')
  }
  //org
  getOrg():Observable<any>{
    return this.httpClient.get('https://localhost:44332/api/Org/get');
  }
  getAllOrg():Observable<any>{
    return this.httpClient.get('https://localhost:44332/api/Org/getAll');
  }
  getOrgById(id:number):Observable<any>{
    return this.httpClient.get('https://localhost:44332/api/Org/'+id+'');
  }
  createOrg(org:Org):Observable<any>{
    return this.httpClient.post('https://localhost:44332/api/Org',org);
  }
  updateOrg(id:number, org:Org):Observable<any>{
    return this.httpClient.put('https://localhost:44332/api/Org/'+id+'',org);
  }
  updateActiveOrg(id:number):Observable<any>{
    return this.httpClient.put('https://localhost:44332/api/Org?id='+id+'','');
  }
  deleteOrg(id:number):Observable<any>{
    return this.httpClient.delete('https://localhost:44332/api/Org?id='+id+'');
  }
  //working History
  getByIdEmployee(id:number):Observable<any>{
    return this.httpClient.get('https://localhost:44332/api/WorkingHistory?id='+id+'')
  }
  getByIdWH(id:number):Observable<any>{
    return this.httpClient.get('https://localhost:44332/api/WorkingHistory/'+id+'')
  }
  createWH(wh:WorkingHistory):Observable<any>{
    return this.httpClient.post('https://localhost:44332/api/WorkingHistory',wh)
  }
  updateWH(id:number, wh:WorkingHistory):Observable<any>{
    return this.httpClient.put('https://localhost:44332/api/WorkingHistory/'+id+'',wh)
  }
  deleteWH(id:number):Observable<any>{
    return this.httpClient.delete('https://localhost:44332/api/WorkingHistory?id='+id+'')
  }
  updateActiveWH(id:number):Observable<any>{
    return this.httpClient.put('https://localhost:44332/api/WorkingHistory?id='+id+'','');
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
interface Org {
  c_Org_Id:number;
  created_Date:string;
  created_User:string;
  updated_Date:string;
  updated_User:string;
  isActive:boolean;
  code:string;
  name:string;
  orderValue:number;
  parent_Id:number;
}
const Employee:IEmployee = {
  "hR_Employee_Id": 0,
  "created_Date": "2023-01-13T09:21:06.497",
  "created_User":"linh",
  "updated_Date":"2023-01-13T09:21:06.497",
  "updated_User":"linh",
  "isActive": true,
  "code":"",
  "firstName":"Hoa",
  "lastName": "Tran",
  "dob":"2023-01-13T09:54:16.070Z",
  "email":"hoatr@gmail.com",
  "telephone":"0987452134",
  "mobiphone":"0373908402",
  "c_Org_Id":2,
  "address":"Nghe An",
  "userLogin":"hoatr",
};
