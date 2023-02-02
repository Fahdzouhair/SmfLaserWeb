import { Injectable } from '@angular/core';
import { Intervention } from '../Models/intervention';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterventionsService {
  getInterventions() {
    throw new Error('Method not implemented.');
  }
  url:string = 'http://localhost:42400/interventions/';
;
  constructor(private http:HttpClient) { }

  //get intervention
  getIntervention(){
    return this.http.get<Intervention[]>(this.url);
  }

  getInterventionById(id:number){
    return this.http.get<Intervention>(`${this.url}/${id}`)
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
