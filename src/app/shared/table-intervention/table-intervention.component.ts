import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Intervention } from 'src/app/Models/intervention';

@Component({
  selector: 'app-table-intervention',
  templateUrl: './table-intervention.component.html',
  styleUrls: ['./table-intervention.component.css']
})
export class TableInterventionComponent implements OnInit {
  public tabValue:any = [];

  @Input() public tableHeader:string[] = [];
  @Input() public data:Intervention[] = []

  constructor(private router:Router) {
    
  }
 
  ngOnInit(): void {
    
  }


  public isEmptyData(){
     return this.tableHeader.length ?  false : true;
  }

  editIntervention(intervention: Intervention){
    this.router.navigate(['/dashboardRespo/modifyIntervention/',intervention.id]);
  }
  
  deleteIntervention(intervention:Intervention){
    this.router.navigate(['/dashboardRespo/deleteIntervention/',intervention.id]);
  }

  showDetails(intervention:Intervention){
    this.router.navigate(['/dashboardRespo/InterventionDetails/',intervention.id]);
  }



  isEncore(state:string){
    if(state == 'en cours'){
      return true; 
    }else return false
  }

  isSuspended(state:string){
    if(state == 'suspendue'){
      return true; 
    }else return false
  }

  isPlanified(state:string){
    if(state == 'planifiée'){
      return true; 
    }else return false
  }

}


