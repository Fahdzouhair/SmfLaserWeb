import { Injectable } from '@angular/core';
import { Intervention } from '../Models/intervention';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterventionsService {
  getInterventions() {
    throw new Error('Method not implemented.');
  }
  url:string = 'http://13.94.172.128/api/intervention';

  headers = new HttpHeaders({
    'Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBlbWFpbC5jb20iLCJpYXQiOjE2NzU0NDE1NTMsImV4cCI6MTY3NTUwMTU1M30.xjtMyA0fVq7l8lXZOM2hX-mo_Cj2qxrIngqGPJQE694'
  }); 
  
  requestOptions = { headers: this.headers };
  constructor(private http:HttpClient) { }

  //get intervention
  getIntervention(){
    return this.http.get<Intervention[]>(this.url,this.requestOptions);
  }

  getInterventionById(id:number){
    return this.http.get<Intervention>(`${this.url}/${id}`,this.requestOptions)
  }

  getTypeIntervention(){
    return this.http.get('http://13.94.172.128/api/typeIntervention')
  }
  
  //update intervention
  updateIntervention(intervention:Intervention,id?:number){
    return this.http.put<Intervention>(`${this.url}/${id}`,intervention);
  }



  //delete intervention
  deleteIntervention(id:number){
    return this.http.delete<Intervention>(`${this.url}/${id}`);
  }
  //create intervention
  postIntervention(intervention:Intervention){
    return this.http.post<Intervention>(this.url,intervention);
  }

  uploadFormData(x:FormData):Observable<any>{
    return this.http.post(this.url,x);
  }

}
