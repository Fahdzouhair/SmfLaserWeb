import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  tableH:string[] = ['nom','prenom','tele','email','adresse'];
  tableOfUseres:User[] = [
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
