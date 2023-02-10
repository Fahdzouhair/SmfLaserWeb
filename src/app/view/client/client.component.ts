import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  tableH:string[] = ['nom','prenom','tele','email','adresse'];
  tableOfUseres:User[] = [
  ];
  constructor(private router:Router,private user_service:UsersService) { }

  ngOnInit(): void {
    this.user_service.getClient().subscribe({
      next: res => {
        this.tableOfUseres = res;
      },
      error: err => console.log(err)
    })
  }

}
