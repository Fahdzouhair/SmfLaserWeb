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
  List_users ?: User[];
  List_Respo ?: User[];
  test:Boolean = false;
  constructor(private user_service:UsersService,private router:Router) { }

  ngOnInit(): void {
   this.getAllUser();
  }
  

  getAllUser(){
    
     this.getUsers();
     this.getResponsables();
     if(this.test){
        window.location.reload();
     }
    
  }

  getUsers(){
    return this.user_service.getUsers().subscribe({
      next:(res) => {
        this.tableOfUseres = res;
      },
      error:(err) => console.log(err)
    })
  }

    getResponsables(){
      return this.user_service.getChefEquipe().subscribe({
        next:(res) => {
          this.test = true;
          console.log(res);
          this.tableOfUseres = this.tableOfUseres.concat(res);
        },
        error:(err) => console.log(err)
      })
    }
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

 

