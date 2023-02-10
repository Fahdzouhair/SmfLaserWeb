import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipe } from '../Models/equipe';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  url:string = 'http://13.94.172.128/api/equipe';

  
  headers = new HttpHeaders({
    'Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBlbWFpbC5jb20iLCJpYXQiOjE2NzU0MzE1NzcsImV4cCI6MTY3NTQ5MTU3N30.qMG-J43bEkmiPCgdIpqlRVD-vtPi0L9H8EKtBjn5JVs'
  }); 
  requestOptions = { headers: this.headers };
  constructor(private http:HttpClient) { }

  getEquipe(){
    return this.http.get<Equipe[]>(this.url,this.requestOptions);
 }

 getEquipeById(id:number){
    return this.http.get<Equipe>(`${this.url}/${id}`,this.requestOptions);
 }

 postEquipe(equipe:any){
  return this.http.post<Equipe>(this.url,equipe,this.requestOptions);
 }

 updateEquipe(equipe:Equipe,id?:number){
    return this.http.put<Equipe>(`${this.url}/${id}`,equipe,this.requestOptions);
 }

}
