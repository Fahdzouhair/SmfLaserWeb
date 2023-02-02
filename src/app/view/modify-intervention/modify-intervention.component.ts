import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Intervention } from 'src/app/Models/intervention';
import { InterventionsService } from 'src/app/Services/interventions.service';

@Component({
  selector: 'app-modify-intervention',
  templateUrl: './modify-intervention.component.html',
  styleUrls: ['./modify-intervention.component.css']
})
export class ModifyInterventionComponent implements OnInit {
  editIntervention!: FormGroup;
  c_intervention !: Intervention;
  id?:any;
  constructor(private fb : FormBuilder,private router:Router,private intervention_service:InterventionsService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.editIntervention = this.fb.group({
      objet:['',Validators.required],
      date_debut:['',Validators.required],
      date_fin:['',Validators.required],
      date_debut_reel:[''],
      date_fin_reel:[''],
      adresse:['',Validators.required],
      document:['',Validators.required],
      status:['',Validators.required]
    })

    this.route.paramMap.subscribe(res => this.id = res.get('id'));

    this.getCurrentIntervention(this.id);
    
  }

  editInterventionCall(){
    if(this.editIntervention.valid){
      console.log(this.editIntervention.value);
      //generate Id 
      let intervention:Intervention = this.editIntervention.value;
      this.intervention_service.updateIntervention(intervention,this.id).subscribe({
        next: (res)=>{
            console.log(res);
            alert(`l'intervention ${this.editIntervention.value.id} a été modifié`)
            this.router.navigateByUrl('dashboardRespo/interventions')
        },
        error: (err)=>{
          console.log(err);
        }
      });
      // add itervention by service 
    }
  }

  goBck(){
    this.router.navigateByUrl('dashboardRespo/interventions')
  }

  getCurrentIntervention(id:any){
     this.intervention_service.getInterventionById(id).subscribe(
      e => {
        this.c_intervention = e;
        this.editIntervention.patchValue({...e});
      }
     )
  }

 

  get objet(){
  return this.editIntervention.get('objet');
  }

  get date_debut(){
    return this.editIntervention.get('date_debut');
  }

  get date_fin(){
    return this.editIntervention.get('date_fin');
  }

  get date_debut_reel(){
    return this.editIntervention.get('date_debut_reel');
  }

  get date_fin_reel(){
    return this.editIntervention.get('date_fin_reel');
  }

  get adresse(){
    return this.editIntervention.get('adresse');
  }

  get document(){
    return this.editIntervention.get('document');
  }

  get status(){
    return this.editIntervention.get('status');
  }
  
}
