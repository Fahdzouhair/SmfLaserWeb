import { Component, OnInit } from '@angular/core';
import { EquipeService } from 'src/app/Services/equipe.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  tableH:string[] = ['id','Nom','Responsable'];
  tableOfTeams:any = [    
   
  ];
  constructor(private equipe:EquipeService) { }

  ngOnInit(): void {
    this.getEquipe()
  }

  getEquipe(){
      return this.equipe.getEquipe().subscribe({
      next:(res: any) => {
        this.tableOfTeams = res;
        console.log(res);
      },
      error:(err) => {
        console.log("can't get teams");
      }
    })
  } 

}
