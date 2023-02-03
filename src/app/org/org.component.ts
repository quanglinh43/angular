import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';

@Component({
  selector: 'app-org',
  templateUrl: './org.component.html',
  styleUrls: ['./org.component.scss']
})
export class OrgComponent implements OnInit {
  treeControl = new NestedTreeControl<menuItem>(node => node.c_Orgs);
  dataSource = new MatTreeNestedDataSource<menuItem>();
  click:boolean=false;
  click1:boolean=false;
  constructor (private testService:TestService){
  }
  ngOnInit(){
    this.testService.getOrg().subscribe(sc=>{
      this.dataSource.data=sc;
    })
    
  }
  hasChild = (_: number, node: menuItem) => !!node.c_Orgs && node.c_Orgs.length > 0;
  onClick(){
    this.click=!this.click;
  }
  onClick1(){
    this.click1=!this.click1;
  }
}

class menuItem {
  c_Org_Id!:number;
  created_Date!:string;
  created_User!:string;
  updated_Date!:string;
  updated_User!:string;
  isActive!:boolean;
  code!:string;
  name!:string;
  orderValue!:number;
  parent_Id!:number;
  c_Orgs!:menuItem[];
}

