import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../entities/person';


@Injectable({
  providedIn: 'root'
})
export class PersonService {
url: string="https://backend-ap-deploy.herokuapp.com/persona";

  constructor(private http:HttpClient) {
   }
   obtenerDatosPersona():Observable<Person>{
    return this.http.get<Person>(this.url+"/1")
   }
   editarDatosPersona(person:Person):Observable<any>{
     return this.http.put(this.url, person)
   }   
}
