import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { catchError, Observable, throwError,BehaviorSubject, of  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  now = new Date();

  idUpdate!:number;
  idWH!:number;

  

  constructor(private httpClient : HttpClient) { }
  getList(page:number=1,size:number=10) : Observable<any> {
    
      return this.httpClient.get('https://localhost:7253/api/HR_Employee/'+page+','+size+'');
      
  }
  getAll():Observable<any>{
     return this.httpClient.get('https://localhost:7253/api/HR_Employee');
  }

  getById(id:number):Observable<any>{
    return this.httpClient.get('https://localhost:7253/api/HR_Employee/'+id+'');
 }
  add(employee:IEmployee):Observable<any>{
    return this.httpClient.post('https://localhost:7253/api/HR_Employee',employee);
  }
  update(id:number, employee:any):Observable<any>{
    return this.httpClient.put('https://localhost:7253/api/HR_Employee/'+id+'',employee);
  }
  updateActive(id:number):Observable<any>{
    return this.httpClient.put('https://localhost:7253/api/HR_Employee?id='+id+'','');
  }
  delete(id:number):Observable<any>{
    return this.httpClient.delete('https://localhost:7253/api/HR_Employee/'+id+'')
  }
  //org
  getOrg():Observable<any>{
    return this.httpClient.get('https://localhost:7253/api/Org/get');
  }
  getAllOrg():Observable<any>{
    return this.httpClient.get('https://localhost:7253/api/Org/getAll');
  }
  getOrgById(id:number):Observable<any>{
    return this.httpClient.get('https://localhost:7253/api/Org/'+id+'');
  }
  //working History
  getByIdEmployee(id:number):Observable<any>{
    return this.httpClient.get('https://localhost:7253/api/WorkingHistory?id='+id+'')
  }
  getByIdWH(id:number):Observable<any>{
    return this.httpClient.get('https://localhost:7253/api/WorkingHistory/'+id+'')
  }
  createWH(wh:WorkingHistory):Observable<any>{
    return this.httpClient.post('https://localhost:7253/api/WorkingHistory',wh)
  }
  updateWH(id:number, wh:WorkingHistory):Observable<any>{
    return this.httpClient.put('https://localhost:7253/api/WorkingHistory/'+id+'',wh)
  }
  deleteWH(id:number):Observable<any>{
    return this.httpClient.delete('https://localhost:7253/api/WorkingHistory?id='+id+'')
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
  hR_Employee_Id:number;
  c_Org_Id:number;
  form_Date:string;
  to_date:string;
  jobTitle:string;
  salaryAmt:number;
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
