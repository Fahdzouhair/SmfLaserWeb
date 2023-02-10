import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-modify-chef-equipe',
  templateUrl: './modify-chef-equipe.component.html',
  styleUrls: ['./modify-chef-equipe.component.css']
})
export class ModifyChefEquipeComponent implements OnInit {
  editForm !: FormGroup;
  c_chef_equipe !: User;
  id?:any;
  constructor(private fb : FormBuilder,private router:Router,private user_service:UsersService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.editForm = this.fb.group({
      nom:['',Validators.required],
      prenom:['',Validators.required],
      numeroTelephone : ['',[
        Validators.required
      ]],
      email: ['',[
        Validators.required,
        Validators.email
      ]],
      adresse:['',Validators.required]
    })
    this.route.paramMap.subscribe(res => this.id = res.get('id'));

    this.getCurrentChefEquipe(this.id);
    
  }

  modifyChefEquipe(id?:number){
    if(this.editForm.valid){

      this.user_service.updateChefEquipe(this.editForm.value,id).subscribe({
        next:(res) => {
          alert(`le membre ${this.editForm.value.nom} a été modifié`)
          this.router.navigateByUrl('/dashboardAdmin/users')
        },
        error:(err) => {
          console.error(err);
        }
      })
    }
    
    
  }

  cancel(){
    this.router.navigateByUrl('/dashboardAdmin/users');
  }

  getCurrentChefEquipe(id:number){
    this.user_service.getChefEquipeById(id).subscribe(
      res => {
        this.c_chef_equipe = res;
        this.editForm.patchValue({...res});
      }
      )
  }

  get nom(){
    return this.editForm.get('nom');
  }

  get prenom(){
    return this.editForm.get('prenom');
  }

  get tele(){
    return this.editForm.get('tele');
  }

  get email(){
    return this.editForm.get('email');
  }

  get adresse(){
    return this.editForm.get('adresse');
  }

  
}