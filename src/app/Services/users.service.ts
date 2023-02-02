import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url:string = 'http://13.94.172.128/api/membreEquipe';
  url_responsableEquipe:string = 'http://13.94.172.128/api/responsableEquipe';

  constructor(private http:HttpClient) { }

  getChefEquipe(){
    return this.http.get<User[]>(this.url_responsableEquipe);
  }

  getUsers(){
     return this.http.get<User[]>(this.url);
  }

  getUserById(id:number){
    return this.http.get<User>(`${this.url}/${id}`);
  }

  getClient(){
    return this.http.get<User[]>("http://13.94.172.128/api/clients")
  }

  postUser(user:User){
    return this.http.post<User>(this.url,user);
  }

  updateUser(user:User,id?:number){
    return this.http.put<User>(`${this.url}/${id}`,user);
  }

  deleteUser(id:number){
    return this.http.delete<User>(`${this.url}/${id}`);
  }
}
