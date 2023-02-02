import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipe } from '../Models/equipe';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  url:string = 'http://13.94.172.128/api/equipe';
  constructor(private http:HttpClient) { }

  getEquipe(){
    return this.http.get<Equipe[]>(this.url);
 }

 postEquipe(equipe:any){
  return this.http.post<any>(this.url,equipe);
 }

}
