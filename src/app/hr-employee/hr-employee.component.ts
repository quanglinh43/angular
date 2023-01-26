import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-hr-employee',
  templateUrl: './hr-employee.component.html',
  styleUrls: ['./hr-employee.component.scss']
})
export class HREmployeeComponent implements OnInit {
  @ViewChild('size') size!:ElementRef<HTMLSelectElement>;
  @ViewChild('prePage') prePage!:ElementRef<HTMLLinkElement>;
  @ViewChild('pageIndex') pageIndex!:ElementRef<HTMLLabelElement>;
  @ViewChild('nextPage') nextPage!:ElementRef<HTMLLinkElement>;
  constructor(private testService:TestService){}
  list:any;
  previous=true;
  next=false;
  page:number=1;
  totalPage:number=1;
  _size:number=10;
  idUpdate:any;

  

  ngOnInit(): void {
    this.testService.getList().subscribe(ls=>{
      this.list=ls.items;
      this.page=ls.pageIndex;
      this.totalPage=ls.totalPage;
      if(this.totalPage==1)this.hidePage();
      //console.log(this.list);

      
    })
  }

  print (i:string):string{
    return i;
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

  onChange(event:any){
    this._size = (Number)(this.size.nativeElement.value);
    if(this._size!=0)
    this.testService.getList(1,this._size).subscribe(ls=>{
      this.list=ls.items;
      this.page=ls.pageIndex;
      this.totalPage=ls.totalPage;
      this.showPage();
      this.previous=true;
      if(this.totalPage==1)this.hidePage();
    })
    else
    {
      this.testService.getAll().subscribe(ls=>{
        this.list=ls;
        this.hidePage();
        //console.log(this.list)
      })
      
    }
    
  }
  onPreClick(){
    if(this.next)this.next=!this.next;
    this.page--;
    this.testService.getList(this.page,this._size).subscribe(ls=>{
      this.list=ls.items;
      this.page=ls.pageIndex;
    })
    if(this.page==1)this.previous=!this.previous;
  }

  onNextClick(){
    if(this.previous)this.previous=!this.previous;
    this.page++;
    this.testService.getList(this.page,this._size).subscribe(ls=>{
      this.list=ls.items;
      this.page=ls.pageIndex;
      //console.log(ls.items.length)
    })
    if(this.page==this.totalPage)this.next=!this.next;
  }
  onDeleteClick(event:number){
    if(confirm('Are you sure want to delete ?'))
    try {
      this.testService.delete(event).subscribe(sb=>{
        this.resetPage();
      })
    } catch (error) {
      console.log(error);
    }
  }
  onDetailClick(event:number){
    this.testService.idUpdate=event;
  }
  onUpdateClick(event:number){
    this.testService.idUpdate=event;
  }
  onStatusClick(id:number){
    if(confirm('are you sure change status?'))
    {
      this.testService.updateActive(id).subscribe(sc=>{
        this.resetPage();
      })
    }
  }
  public hidePage() {
    this.prePage.nativeElement.hidden=true;
    this.pageIndex.nativeElement.hidden=true;
    this.nextPage.nativeElement.hidden=true;
  } 
  public showPage() {
    //this.prePage.nativeElement.hidden=false;
    this.pageIndex.nativeElement.hidden=false;
    this.nextPage.nativeElement.hidden=false;
  } 
  public resetPage(){
    if(this._size!=0){
      this.testService.getList(this.page,this._size).subscribe(ls=>{
        if(ls.items.length>0)
        {
          this.list=ls.items;
          this.page=ls.pageIndex;
        }
        else
        {
          this.page--
          this.testService.getList(this.page,this._size).subscribe(ls1=>{
            this.list=ls1.items;
            this.page=ls1.pageIndex;
          })
        }
      })
    }
    else{
      this.testService.getAll().subscribe(ls=>{
        this.list=ls;
        this.hidePage();
      })
    }
  }
}




