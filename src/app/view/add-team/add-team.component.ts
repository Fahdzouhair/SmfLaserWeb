import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipe } from 'src/app/Models/equipe';
import { Intervention } from 'src/app/Models/intervention';
import { User } from 'src/app/Models/user';
import { EquipeService } from 'src/app/Services/equipe.service';
import { InterventionsService } from 'src/app/Services/interventions.service';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  addEquipe!: FormGroup;
  listRespo: User[] = [
];
  listMembre: User[] = [
  ];
  
  constructor(private fb : FormBuilder,private router:Router,private equipe_service:EquipeService,private route:ActivatedRoute,private user_service:UsersService) { 

  }

  ngOnInit(): void {
    this.user_service.getUsers().subscribe({
      next:res => {
        console.log(res);
          this.listMembre = res;
      },
      error:err => {
        console.log(err)
      }
    }
    )

    this.user_service.getChefEquipe().subscribe({
      next:res => {
        console.log(res);

        
        this.listRespo = res;
       },
       error:err => {
        console.log(err);
       }
    }
    )

   

    this.addEquipe = this.fb.group({
      nom:['',Validators.required],
      chefEquipe:['',Validators.required],
      membres:this.fb.array([])
    })    
  }

  addTeam(){  
    if(this.addEquipe.valid){
      let membreID : any[] = this.addEquipe.value.membres;
      let  listMembreId:number[] = [];

      membreID.map(e => {
        let id :number = e.membre;
        listMembreId.push(id);
      })

      let equipe:Equipe = {
        nom: this.addEquipe.value.nom,
        chefEquipe: this.addEquipe.value.chefEquipe,
        membres: listMembreId
      }

      console.log(equipe);
      
      this.equipe_service.postEquipe(equipe).subscribe({
        next:(res) => {
          alert(`l'equipe ${this.addEquipe.value.nom} a été créé`);
          this.router.navigateByUrl('/dashboardRespo/teams')
        },
        error:(err) => {
          alert("erreur de création verfier que vous avez selctioner les membres et bien choisir le responsable !");
        }
      }) 
    }
  }

  getFullName(resp:User){
    return `${resp.nom} ${resp.prenom}`
  }
  get nom(){
    return this.addEquipe.get("nom");
  }
  get chefEquipe(){
    return this.addEquipe.get("chefEquipe");
  }
  get membres(){
    return this.addEquipe.controls['membres'] as FormArray;
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


}
