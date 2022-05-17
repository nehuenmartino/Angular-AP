import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../entities/person';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http:HttpClient) {
   }
   obtenerDatosPersona():Observable<any>{
    return this.http.get('assets/data/person.json')
   }
   editarDatosPersona(person:Person):Observable<any>{
     return this.http.post('http://localhost:3000/posts', person)
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
    return this.http.get('assets/data/project.json')
   }
}
