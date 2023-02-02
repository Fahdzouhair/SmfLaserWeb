import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Intervention } from 'src/app/Models/intervention';
import { InterventionsService } from 'src/app/Services/interventions.service';


@Component({
  selector: 'app-details-intervention',
  templateUrl: './details-intervention.component.html',
  styleUrls: ['./details-intervention.component.css']
})
export class DetailsInterventionComponent implements OnInit {
  c_intervention !: Intervention;
  id?:any;
  constructor(private router:Router,private intervention_service:InterventionsService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(res => this.id = res.get('id'));
    this.getCurrentIntervention(this.id);
    let obj:any = {
      id:1,
      name:"fahd",
      date:""
    };

    console.log(obj.date.length == 0);
  }

  goBack(){
    this.router.navigateByUrl('/dashboardRespo/interventions')
  }

  getCurrentIntervention(id:number){
    this.intervention_service.getInterventionById(id).subscribe(
      e => this.c_intervention = e
    );
  }

  checkD(intervention:Intervention){
    return intervention.date_debut_reel == undefined ? true : false;
  }

  checkF(intervention:Intervention){
    return intervention.date_fin_reel == undefined ? true : false;
  }

}
