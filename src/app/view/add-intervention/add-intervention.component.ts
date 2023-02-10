import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FilePondOptions } from 'filepond';
import { FilePondComponent } from 'ngx-filepond/filepond.component';
import { Equipe } from 'src/app/Models/equipe';
import { Intervention } from 'src/app/Models/intervention';
import { User } from 'src/app/Models/user';
import { EquipeService } from 'src/app/Services/equipe.service';
import { InterventionsService } from 'src/app/Services/interventions.service';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-add-intervention',
  templateUrl: './add-intervention.component.html',
  styleUrls: ['./add-intervention.component.css']
})
export class AddInterventionComponent implements OnInit {
  addIntervention!: FormGroup;
  selectedFile ?: File ;
  fileName?: string ;
  listType ?: any = [
  {
    type:"installation"
  },
  {
    type:"livraison"
  }
  ];
  listClient ?: User[] = [
    {
      id:1,
      nom:"client",
      prenom:"1",
      numeroTelephone:"98986786",
      adresse:"Essuipora",
      email:"test@gmail.com"
    }
  ];
  listEquipe ?: any[] = [
    {
      id:1,
      nom:"equipe 1",
    }
       
  ];

  constructor(private fb : FormBuilder,private router:Router,private cd: ChangeDetectorRef,
    private user_service:UsersService,private equipe_service:EquipeService,private http:HttpClient,
    private intervention_service:InterventionsService,private route:ActivatedRoute) { }

  ngOnInit(): void {

    //GET cLIENT 
    this.getClient();
    //GET TYPE
    this.getType();
    //GET EQUIPE
    this.getEquipe();


    this.addIntervention = this.fb.group({
      objet:['',Validators.required],
      date_debut:[''],
      date_fin:[''],
      adresse:[''],
      files:[null,Validators.required],
      typeIntervention:[''],
      client:[''],
      equipe:['']
    })
    
    console.log(this.listClient,this.listEquipe,this.listType);
  }

  //select file
  uploadFile(event:any){
    if (event.target.files.length > 0) {
       this.selectedFile = event.target.files[0];
       this.fileName = this.selectedFile?.name;
        this.addIntervention.get('files')?.setValue(this.selectedFile);
    }
  }
  // submit data 
  submitFrom(){
    const formData  = new FormData();
    //formData.append('url',this.addIntervention.get('files')?.value,this.addIntervention.get('files')?.value?.name);
    console.log(this.addIntervention.value);
    for(let key in this.addIntervention.value){
      formData.append(key,this.addIntervention.value[key]);
    }

    // send formDAta to server
  }
  addInterventionCall(){
    if(this.addIntervention.valid){     

     /*   console.log(this.addIntervention.value);
      //generate Id 
      let intervention:Intervention = this.addIntervention.value;
      this.intervention_service.postIntervention(intervention).subscribe({
        next: (res)=>{
            console.log(res);
           this.router.navigateByUrl('dashboardRespo/addIntervention')
        },
        error: (err)=>{
          console.log(err);
        } 
      });
      // add itervention by service  */
    }
  }

  getFullName(client:User){
   return `${client.nom} ${client.prenom}`;
  }

  getClient(){
    this.user_service.getClient().subscribe({
      next:res => {
          this.listClient = res;
      },
      error:err => {
        console.log(err)
      }
    })
  }

  getType(){
    this.intervention_service.getTypeIntervention().subscribe({
      next:res => {
          this.listType = res;
      },
      error:err => {
        console.log(err)
      }
    })
  }

  getEquipe(){
    this.equipe_service.getEquipe().subscribe({
      next:res => {
          this.listEquipe = res;
      },
      error:err => {
        console.log(err)
      }
    })
  }
 

  get objet(){
    return this.addIntervention.get('objet');
  }

  get date_debut(){
    return this.addIntervention.get('date_debut');
  }

  get date_fin(){
    return this.addIntervention.get('date_fin');
  }

  get adresse(){
    return this.addIntervention.get('adresse');
  }

  get files(){
    return this.addIntervention.get('files');
  }

  get client(){
    return this.addIntervention.get('client');
  }
  
  get equipe(){
    return this.addIntervention.get('equipe');
  }

  get type(){
    return this.addIntervention.get('type');
  }

}
