import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

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

  constructor(private router:Router,private route:ActivatedRoute) {
    
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

  editUser(user:any){
    if(this.route.component?.name == 'ClientComponent'){
      this.router.navigate(['/dashboardRespo/modifyClient/',user.id]);
    }else{
      if(user.roles[0].role == 'ROLE_RESPONSABLE_EQUIPE'){
        this.router.navigate(['/dashboardAdmin/modifyChefEquipe/',user.id]);
      }else{
        this.router.navigate(['/dashboardAdmin/modifyUser/',user.id]);
      }
    }
    
  }

  deleteUser(user:any){
    console.log(user);
    if(this.route.component?.name == 'ClientComponent'){
      this.router.navigate(['/dashboardRespo/deleteClient',user.id]);
    }else{
      if(user.roles[0].role == 'ROLE_RESPONSABLE_EQUIPE'){
        this.router.navigate(['/dashboardAdmin/deleteChefEquipe/',user.id]);
      }else{
        this.router.navigate(['/dashboardAdmin/deleteUser/',user.id]);
      }
      
    }
  }

}
