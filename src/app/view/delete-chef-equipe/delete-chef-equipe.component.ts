import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-delete-chef-equipe',
  templateUrl: './delete-chef-equipe.component.html',
  styleUrls: ['./delete-chef-equipe.component.css']
})
export class DeleteChefEquipeComponent implements OnInit {
  c_chef_equipe !: any;
  id?:any;
  constructor(private router:Router,private user_service:UsersService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(res => this.id = res.get('id'));
    this.getCurrentChefEquipe(this.id);
    console.log(this.c_chef_equipe);
  }

  removeChefEquipe(){
    return this.user_service.deleteChefEquipe(this.c_chef_equipe).subscribe({
      next:(res) => {
        this.router.navigateByUrl('/dashboardAdmin/users');
      },
      error:(err) => {
        console.log(err);
      }
    })
  }

  goBack(){
    this.router.navigateByUrl('/dashboardAdmin/users');
  } 

  getCurrentChefEquipe(id:number){
    this.user_service.getChefEquipeById(id).subscribe(res => {
        this.c_chef_equipe =res;
    })
  }
}
