import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipe } from 'src/app/Models/equipe';
import { User } from 'src/app/Models/user';
import { EquipeService } from 'src/app/Services/equipe.service';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-modify-team',
  templateUrl: './modify-team.component.html',
  styleUrls: ['./modify-team.component.css']
})
export class ModifyTeamComponent implements OnInit {
  modifyEquipe!: FormGroup;
  c_equipe !: Equipe;
  id?:any;

  listRespo: User[] = [
    {
      id:1,
      nom:"saif",
      prenom:"zouhair",
      tele:"string",
      adresse:"Essuipora",
      email:"test@gmail.com"
    },
    {
      id:2,
      nom:"omar",
      prenom:"zouhair",
      tele:"string",
      adresse:"Essuipora",
      email:"test@gmail.com"
    },
    {
      id:3,
      nom:"ibrahim",
      prenom:"zouhair",
      tele:"string",
      adresse:"Essuipora",
      email:"test@gmail.com"
    }
    ];
    listMembre: User[] = [
      {
        id:1,
        nom:"naaima",
        prenom:"khadija",
        tele:"string",
        adresse:"Essuipora",
        email:"test@gmail.com"
      },
      {
        id:2,
        nom:"houda",
        prenom:"khadija",
        tele:"string",
        adresse:"Essuipora",
        email:"test@gmail.com"
      }
    ];

  constructor(private fb : FormBuilder,private router:Router,private equipe_service:EquipeService,private user_service:UsersService,private route:ActivatedRoute  ) { }

  ngOnInit(): void {

    this.user_service.getUsers().subscribe({
      next:res => {
          this.listMembre = res;
      },
      error:err => {
        console.log(err)
      }
    }
    )

    this.user_service.getChefEquipe().subscribe({
      next:res => {
        this.listRespo = res;
       },
       error:err => {
        console.log(err);
       }
    }
    ) 

    this.modifyEquipe = this.fb.group({
      nom:['',Validators.required],
      chefEquipe:['',Validators.required],
      membres:this.fb.array([])
    })

    /*

    getCurrentEquipe(id:any){
      this.equipe_service.getEquipeById(id).subscribe(
       e => {
         this. = e;
         this.editIntervention.patchValue({...e});
       }
      )
   } */
 
}

  ApplyChanges(){
      
  }

  getFullName(resp:User){
    return `${resp.nom} ${resp.prenom}`
  }


  get nom(){
    return this.modifyEquipe.get("nom");
  }

  get chefEquipe(){
    return this.modifyEquipe.get("chefEquipe");
  }



  get membres(){
    return this.modifyEquipe.controls['membres'] as FormArray;
  }

  addMembre(){
    const membreForm = this.fb.group({
      membre:['',Validators.required]
    })

    return this.membres.push(membreForm);
  }
  removeMembre(i:number){
    this.membres.removeAt(i)
  }

  goBck(){
    return this.router.navigateByUrl('dashboardRespo/teams')
  }
  
    
}