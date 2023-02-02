import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title: string = 'test';
  constructor(private router: Router) { 
    
   
  }

  ngOnInit(): void {
    switch(this.router.url === '/loginResonsable'){
      case true:
        this.title = 'Espace de Responsable de planification'
        break;
      case false:
        this.title = "Espace de l'Administrateur"
        break;
      }
  }

  loginIn(usercode:string,password:string){
    console.log(usercode,password);
    switch(this.router.url === '/loginResonsable'){
      case true:
        this.router.navigateByUrl('/dashboardRespo');
        break;
      case false:
        this.router.navigateByUrl('/dashboardAdmin/users');
        break;
      }
   
  }
}
