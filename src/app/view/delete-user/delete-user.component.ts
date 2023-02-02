import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  c_user !: User;
  id?:any;
  constructor(private router:Router,private user_service:UsersService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(res => this.id = res.get('id'));
    this.getCurrentUser(this.id);
  }

  removeUser(){
    return this.user_service.deleteUser(this.id).subscribe({
      next:(res) => {
        alert(`le membre ${this.c_user.nom} a été supprimé `);
        this.router.navigateByUrl('/dashboardAdmin/users');
      },
      error:(err) => {
        alert("error !");
      }
    })
  }

  goBack(){
    this.router.navigateByUrl('/dashboardAdmin/users');
  }

  getCurrentUser(id:number){
    this.user_service.getUserById(id).subscribe(res => {
        this.c_user =res;
    })
  }
}
