import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  tableH:string[] = ['nom','prenom','tele','email','adresse'];
  tableOfUseres:User[] = [
    
  ];
  constructor(private user_service:UsersService,private router:Router) { }

  ngOnInit(): void {
    this.getUsers();
  }
 
  getUsers(){
    return this.user_service.getUsers().subscribe({
      next:(res) => {
        this.tableOfUseres = res;
        //console.log(res);
      },
      error:(err) => {
        alert("error !");
      }
    })
  } 

  


  /* 
   postUser(){
    return this.user_service.postUser().subscribe({
      next:(res) => {
        console.log(res);
      },
      error:(err) => {
        alert("error !");
      }
    })
  }
  */

 

}
