import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Intervention } from 'src/app/Models/intervention';
import { InterventionsService } from 'src/app/Services/interventions.service';

@Component({
  selector: 'app-interventions-list',
  templateUrl: './interventions-list.component.html',
  styleUrls: ['./interventions-list.component.css']
})
export class InterventionsListComponent implements OnInit {
  tableH:string[] = ['ID','Responsable','date de debut','adresse','type'];
  tableOfInterventions:Intervention[] = [
    
  ];
  constructor(private intervention_service:InterventionsService,private router:Router) { }

  ngOnInit(): void {
    this.getInterventions();
  }
 
  getInterventions(){
    return this.intervention_service.getIntervention().subscribe({
      next: (res) => {
        this.tableOfInterventions = res;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
 /*  getUsers(){
    return this.intervention_service.getInterventions().subscribe({
      next:(res) => {
        this.tableOfUseres = res;
        //console.log(res);
      },
      error:(err) => {
        alert("error !");
      }
    })
  }  */

  


  /* 
   postUser(){
    return this.user_service.postUser().subscribe({
      next:(res) => {
        console.log(res);
      },
      error:(err) => {
        alert("error !");
      }
    })
  }
  */

 

}
