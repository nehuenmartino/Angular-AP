import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../entities/person';
import {Project} from '../entities/project';


@Injectable({
  providedIn: 'root'
})
export class PersonService {
url: string="http://localhost:8080/persona";

  constructor(private http:HttpClient) {
   }
   obtenerDatosPersona():Observable<Person>{
    return this.http.get<Person>(this.url+"/4")
   }
   editarDatosPersona(person:Person):Observable<any>{
     return this.http.post(this.url, person)
   }

     
   obtenerDatosProyectos():Observable<any>{
    return this.http.get('assets/data/project.json')
   }
   editarDatosProyectos(project: Project):Observable<any>{
    return this.http.post('http://localhost:3000/posts', project)
  }
}
