import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-delete-client',
  templateUrl: './delete-client.component.html',
  styleUrls: ['./delete-client.component.css']
})
export class DeleteClientComponent implements OnInit {
  c_client !: User;
  id?:any;
  constructor(private router:Router,private user_service:UsersService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(res => this.id = res.get('id'));
    this.getCurrentUser(this.id);
  }

  removeClient(){
    return this.user_service.deleteClient(this.id).subscribe({
      next:(res) => {
        alert(`le client ${this.c_client.nom} a été supprimé `);
        this.router.navigateByUrl('/dashboardRespo/clients');
      },
      error:(err) => {
        alert("error !");
      }
    })
  }

  getCurrentUser(id:number){
    this.user_service.geClientById(id).subscribe(res => {
        this.c_client =res;
    })
  }

  goBack(){
    this.router.navigateByUrl('/dashboardRespo/clients');
  }
}
