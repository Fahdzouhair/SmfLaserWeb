import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipe } from 'src/app/Models/equipe';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-table-equipe',
  templateUrl: './table-equipe.component.html',
  styleUrls: ['./table-equipe.component.css']
})
export class TableEquipeComponent implements OnInit {
  public tabValue:any = [];
  empty:boolean = true;
  @Input() public tableHeader:string[] = [];
  @Input() public data:Equipe[] = []

  constructor(private router:Router) {
    
  }
 
  ngOnInit(): void {
    this.empty = this.data.length > 0 ? false : true;
  }

  test(user:any){
   // console.log(user.responsableEquipe?.nom);
    if(user?.responsableEquipe?.nom){
      return this.getFullName(user.responsableEquipe);
    }else 
    return '';
  }

  getFullName(resp:User){
    return `${resp.nom} ${resp.prenom}`
  }

  public isEmptyData(){
     return this.tableHeader.length ?  false : true;
  }

  editEquipe(equipe:Equipe){
    this.router.navigate(['/dashboardRespo/modifyTeam',equipe.id]);
  }

  deleteEquipe(equipe:Equipe){
    this.router.navigate(['/dashboardRespo/deleteTeam',equipe.id]);
  }



}


