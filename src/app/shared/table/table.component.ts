import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  
  public tabValue:any = [];

  @Input() public tableHeader:string[] = [];
  @Input() public data:User[] = []

  constructor(private router:Router) {
    
  }
 
  ngOnInit(): void {
    
  }
  /* ngOnChanges(changes: any): void {
      if(changes?.data_?.currentValue ){
        this.getData(this.data_);
      }
      
  } */


  public isEmptyData(){
     return this.tableHeader.length ?  false : true;
  }

/*   public getData(dataTable: any[]){
    dataTable.forEach((data: any) => {
      this.tabKey = Object.keys(data);
      this.tabValue.push(Object.values(data));
     
  })
  } */

  editUser(user:User){
    this.router.navigate(['/dashboardAdmin/modifyUser/',user.id]);
  }

  deleteUser(user:User){
    this.router.navigate(['/dashboardAdmin/deleteUser/',user.id]);
  }

}
