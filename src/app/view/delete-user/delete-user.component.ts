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

  c_user !: any;
  id?:any;
  constructor(private router:Router,private user_service:UsersService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(res => this.id = res.get('id'));
    this.getCurrentUser(this.id);
    console.log(this.c_user);
  }

  removeUser(){
    return this.user_service.deleteUser(this.c_user).subscribe({
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

  getCurrentUser(id:number){
    this.user_service.getUserById(id).subscribe(res => {
        this.c_user =res;
    })
  }
}
