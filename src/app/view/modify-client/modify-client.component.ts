import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-modify-client',
  templateUrl: './modify-client.component.html',
  styleUrls: ['./modify-client.component.css']
})
export class ModifyClientComponent implements OnInit {
  editClientForm !: FormGroup;
  c_client !: User;
  id ?: any;
  constructor(private fb:FormBuilder,private user_service:UsersService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.editClientForm = this.fb.group({
      nom:['',Validators.required],
      prenom:['',Validators.required],
      tele : ['',[
        Validators.required
      ]],
      email: ['',[
        Validators.required,
        Validators.email
      ]],
      adresse:['',Validators.required],
      typeContrat:['',Validators.required]
    })

    this.route.paramMap.subscribe(res => this.id = res.get('id'));
    this.getCurrentUser(this.id);
  }

  modifyClient(){
    if(this.editClientForm.valid){
      const user:User = {
        nom: this.editClientForm.value.nom,
        prenom: this.editClientForm.value.prenom,
        numeroTelephone: this.editClientForm.value.numeroTelephone,
        adresse: this.editClientForm.value.adresse,
        email: this.editClientForm.value.email,
      };

      this.user_service.updateClient(user,this.id).subscribe({
        next: (res)=>{
          console.log(res);
          alert(`le client ${this.editClientForm.value.id} a été modifié`)
          this.router.navigateByUrl('dashboardRespo/clients')
        },
        error: (err)=> console.log(err)
        })
    }
  }

  getCurrentUser(id:number){
    this.user_service.getUserById(id).subscribe(res => {
      this.c_client =res;
      this.editClientForm.patchValue({...res});
  })
  }

  goBck(){
    this.router.navigateByUrl('dashboardRespo/clients')
  }

  get nom(){
    return this.editClientForm.get('nom');
  }

  get prenom(){
    return this.editClientForm.get('prenom');
  }

  get tele(){
    return this.editClientForm.get('tele');
  }

  get email(){
    return this.editClientForm.get('email');
  }

  get adresse(){
    return this.editClientForm.get('adresse');
  }

  get typeContrat(){
    return this.editClientForm.get('typeContrat');
  }

}
