import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  addForm !: FormGroup;
 
  constructor(private fb : FormBuilder,private router:Router,private user_service:UsersService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.addForm = this.fb.group({
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
    
  }

  addUser(){
    if(this.addForm.valid){

      this.user_service.postUser(this.addForm.value).subscribe({
        next:(res) => {
          //console.log(res);
          alert(`le membre ${this.addForm.value.nom} a été créé`);
          this.router.navigateByUrl('/dashboardAdmin/users')
        },
        error:(err) => {
          alert("erreur de création !");
        }
      })
    }
    
    
  }

 

  get nom(){
    return this.addForm.get('nom');
  }

  get prenom(){
    return this.addForm.get('prenom');
  }

  get tele(){
    return this.addForm.get('tele');
  }

  get email(){
    return this.addForm.get('email');
  }

  get adresse(){
    return this.addForm.get('adresse');
  }

  
  
}

