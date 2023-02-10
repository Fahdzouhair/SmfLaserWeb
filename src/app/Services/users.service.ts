import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url:string = 'http://13.94.172.128/api/membreEquipe';
  url_responsableEquipe:string = 'http://13.94.172.128/api/responsableEquipe';

  url_client:string = 'http://13.94.172.128/api/clients';
  
  headers = new HttpHeaders({
    'Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBlbWFpbC5jb20iLCJpYXQiOjE2NzU0MzE1NzcsImV4cCI6MTY3NTQ5MTU3N30.qMG-J43bEkmiPCgdIpqlRVD-vtPi0L9H8EKtBjn5JVs'
  }); 
  
  requestOptions = { headers: this.headers };
  constructor(private http:HttpClient) { }
  
  // ********* CRUD responsable Equipe *************
  getChefEquipe(){
    return this.http.get<User[]>(this.url_responsableEquipe,this.requestOptions);
  }
  getChefEquipeById(id?:number){
    return this.http.get<User>(`${this.url_responsableEquipe}/${id}`,this.requestOptions);
  }
  // POST USER &&  RESPONSABLE
  postUser(user:User){
    console.log(user);
    if(user.role == "1"){
      return this.http.post<User>(this.url,user,this.requestOptions);
    }else{
      console.log("test");
      return this.http.post<User>(this.url_responsableEquipe,user,this.requestOptions);
    }
  }
  updateChefEquipe(chefEquipe:User,id?:number){
    return this.http.put<User>(`${this.url}/${id}`,chefEquipe,this.requestOptions);
  }
  deleteChefEquipe(chefEquipe:User){
    return this.http.delete<User>(`${this.url_responsableEquipe}/${chefEquipe.id}`,this.requestOptions);
  }

   // ********* CRUD USER *************
  getUsers(){
    return this.http.get<User[]>(this.url,this.requestOptions);
  }
  getUserById(id:number){
    return this.http.get<User>(`${this.url}/${id}`,this.requestOptions);
  }
  updateUser(user:User,id?:number){
    return this.http.put<User>(`${this.url}/${id}`,user,this.requestOptions);
  }
  deleteUser(user:User){
    return this.http.delete<User>(`${this.url}/${user.id}`,this.requestOptions);
  }



  // ********* CRUD Client *************
  getClient(){
    return this.http.get<User[]>(this.url_client,this.requestOptions);
  }

  geClientById(id:number){
    return this.http.get<User>(`${this.url_client}/${id}`,this.requestOptions);
  }

  postClient(client:User){
    return this.http.post<User>(this.url_client,client,this.requestOptions);
  }

  updateClient(client:User,id:number){
    return this.http.put<User>(`${this.url_client}/${id}`,client,this.requestOptions);
  }

  deleteClient(id:number){
    return this.http.delete<User>(`${this.url_client}/${id}`,this.requestOptions);
  }
}
