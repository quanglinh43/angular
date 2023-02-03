import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddOrgComponent } from '../add-org/add-org.component';
import { TestService } from '../test.service';
import { UpdateOrgComponent } from '../update-org/update-org.component';

@Component({
  selector: 'app-org-list',
  templateUrl: './org-list.component.html',
  styleUrls: ['./org-list.component.scss']
})
export class OrgListComponent implements OnInit {
  listOrg!:any[];
  constructor( private testservice:TestService,public dialog: MatDialog){}
  ngOnInit(): void {
    this.testservice.getAllOrg().subscribe(sc=>{
      this.listOrg=sc;
    })
  }
  onAddOrgClick(){
    const dialogRef = this.dialog.open(AddOrgComponent, {
      height: '400px',
      width: '1000px',
      position: {right:'360px',top:'100px',bottom:'',left:''},
    });
    dialogRef.afterClosed().subscribe(sc=>{
      this.resetPage();
    })
  }
  onUpdateOrgClick(id:number){
    const dialogRef = this.dialog.open(UpdateOrgComponent, {
      height: '400px',
      width: '1000px',
      position: {right:'360px',top:'100px',bottom:'',left:''},
      data:{
        id: id,
      }
    });
    dialogRef.afterClosed().subscribe(sc=>{
      this.resetPage();
    })
  }
  onDeleteOrgClick(id:number){
    if(confirm('Are you sure want to delete ?'))
    try {
      this.testservice.deleteOrg(id).subscribe(sc=>{
        if(sc)
        {
          if(sc.name=='employee')
          {
            alert("Department have "+sc.number+" employee. Can't dalete!")
          }
          else if(sc.name=='child'){
            alert("Department have "+sc.number+" child. Can't dalete!")
          }
        }
        else
        {
          alert('Success')
          this.resetPage();
        }
        
      })
    } catch (error) {
      console.log(error);
    }
  }
  onStatusClick(id:number){
    if(confirm('are you sure change status?'))
    {
      this.testservice.updateActiveOrg(id).subscribe(sc=>{
        this.resetPage();
      })
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
  
    return [day, month, year].join('/');
  }
  getNameOrg(id:number){
    var org = this.listOrg.find(p=>p.c_Org_Id==id);
    return org;
  }
  resetPage(){
    this.testservice.getAllOrg().subscribe(sc=>{
      this.listOrg=sc;
    })
  }
}

 
