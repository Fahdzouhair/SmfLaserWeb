import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-modify-user',
  templateUrl: './modify-user.component.html',
  styleUrls: ['./modify-user.component.css']
})
export class ModifyUserComponent implements OnInit {
  editForm !: FormGroup;
  c_user !: User;
  id?:any;
  constructor(private fb : FormBuilder,private router:Router,private user_service:UsersService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.editForm = this.fb.group({
      nom:['',Validators.required],
      prenom:['',Validators.required],
      tele : ['',[
        Validators.required
      ]],
      email: ['',[
        Validators.required,
        Validators.email
      ]],
      adresse:['',Validators.required]
    })
    this.route.paramMap.subscribe(res => this.id = res.get('id'));

    this.getCurrentUser(this.id);
    
  }

  modifyUser(id?:number){
    if(this.editForm.valid){

      this.user_service.updateUser(this.editForm.value,id).subscribe({
        next:(res) => {
          alert(`le membre ${this.editForm.value.nom} a été modifié`)
          this.router.navigateByUrl('/dashboardAdmin/users')
        },
        error:(err) => {
          alert("Error !");
        }
      })
      
      /* this.user_service.postUser(this.editForm.value).subscribe({
        next:(res) => {
          this.route.navigateByUrl('/dashboardAdmin/users')
        },
        error:(err) => {
          alert("Error !");
        }
      }) */
    }
    
    
  }

  cancel(){
    this.router.navigateByUrl('/dashboardAdmin/users');
  }

  getCurrentUser(id:number){
    this.user_service.getUserById(id).subscribe(res => {
        this.c_user =res;
        this.editForm.patchValue({...res});
    })
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
