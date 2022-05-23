import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../entities/person';
import {Education} from '../entities/education';
import { Experience } from '../entities/experience';
import {Project} from '../entities/project';


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
   editarDatosEducacion(education:Education):Observable<any>{
    return this.http.post('http://localhost:3000/posts', education)
  }


   obtenerDatosExperiencia():Observable<any>{
    return this.http.get('assets/data/exp.json')
   }
   editarDatosExperiencia(experience:Experience):Observable<any>{
    return this.http.post('http://localhost:3000/posts', experience)
  }


   obtenerDatosHabilidades():Observable<any>{
    return this.http.get('assets/data/skills.json')
   }


   
   obtenerDatosProyectos():Observable<any>{
    return this.http.get('assets/data/project.json')
   }
   editarDatosProyectos(project: Project):Observable<any>{
    return this.http.post('http://localhost:3000/posts', project)
  }
}
