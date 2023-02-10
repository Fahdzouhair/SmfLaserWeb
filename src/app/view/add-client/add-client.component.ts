import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  addClientForm !: FormGroup;
  constructor(private fb:FormBuilder,private user_service:UsersService,private router:Router) { }

  ngOnInit(): void {
    this.addClientForm = this.fb.group({
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
  }

  addClient(){
    if(this.addClientForm.valid){
     this.user_service.postClient(this.addClientForm.value).subscribe({
      next:res => {
          alert(`le client ${this.addClientForm.value.nom} a été créé`);
          this.router.navigateByUrl('/dashboardRespo/clients');
      },
      error:err => console.log(err)
     });
    }
  }

  get nom(){
    return this.addClientForm.get('nom');
  }

  get prenom(){
    return this.addClientForm.get('prenom');
  }

  get tele(){
    return this.addClientForm.get('tele');
  }

  get email(){
    return this.addClientForm.get('email');
  }

  get adresse(){
    return this.addClientForm.get('adresse');
  }

  get typeContrat(){
    return this.addClientForm.get('typeContrat');
  }

}
