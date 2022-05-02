import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http:HttpClient) {
   }
   obtenerDatosPersona():Observable<any>{
    return this.http.get('assets/data/person.json')
   }
   obtenerDatosEducacion():Observable<any>{
    return this.http.get('assets/data/education.json')
   }
   obtenerDatosExperiencia():Observable<any>{
    return this.http.get('assets/data/exp.json')
   }
   obtenerDatosHabilidades():Observable<any>{
    return this.http.get('assets/data/skills.json')
   }
   obtenerDatosProyectos():Observable<any>{
    return this.http.get('assets/data/proyects.json')
   }
}
