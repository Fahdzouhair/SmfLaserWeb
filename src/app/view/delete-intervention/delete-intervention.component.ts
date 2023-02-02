import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Intervention } from 'src/app/Models/intervention';
import { InterventionsService } from 'src/app/Services/interventions.service';

@Component({
  selector: 'app-delete-intervention',
  templateUrl: './delete-intervention.component.html',
  styleUrls: ['./delete-intervention.component.css']
})
export class DeleteInterventionComponent implements OnInit {
  c_intervention!:Intervention;
  id?:any;
  constructor(private router:Router,private intervention_service:InterventionsService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(res => this.id = res.get('id'));
    this.getCurrentIntervention(this.id);
  }

  deleteIntervention(){
     this.intervention_service.deleteIntervention(this.id).subscribe({
      next:() => {
        alert(`l'intervention ${this.c_intervention.id} a été supprimé `);
        this.router.navigateByUrl('dashboardRespo/interventions')
      },
      error:() => {
        alert("error !");
      }
    })
  }

  getCurrentIntervention(id:number){
    this.intervention_service.getInterventionById(id).subscribe(
      e => this.c_intervention = e
    );
  }

  goBack(){
    this.router.navigateByUrl('dashboardRespo/interventions');
  }
}
