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

  listRespo: User[] = [];
  listMembre: User[] = [];

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

    this.route.paramMap.subscribe(res => this.id = res.get('id'));
    this.getCurrentTeam(this.id);

    console.log(this.modifyEquipe.value);
 
}
  getCurrentTeam(id: any) {
    this.equipe_service.getEquipeById(id).subscribe(
      res => {
        this.c_equipe = res;
        let equipeTo : any = this.c_equipe;
        const nom = equipeTo.nom;
        const chefEquipe = equipeTo.responsableEquipe.id;

        console.log({id : id , chefEquipe : chefEquipe});
        
        this.modifyEquipe.patchValue({nom : nom , chefEquipe : chefEquipe});
        console.log(this.modifyEquipe.value);
      }
    )
  }

  ApplyChanges(){
      if(this.modifyEquipe.valid){
        this.equipe_service.updateEquipe(this.modifyEquipe.value).subscribe({
          next:(res) => {
            alert(`l'equipe ${this.modifyEquipe.value.nom} a été modifié`)
            this.router.navigateByUrl('/dashboardRespo/teams')
          },
          error:(err) => {
            console.error(err);
          }
        })
      }
  }

  getFullName(resp:User){
    return `${resp.nom} ${resp.prenom}`
  }

  getFullName2(id?:number){
    let fullName : string = '';
    return fullName;
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