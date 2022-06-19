import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../entities/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {  
  url: string = "http://localhost:8080/experiencia";
constructor(private http: HttpClient) {}

obtenerDatosExperiencia(): Observable<Experience[]> {
  return this.http.get<Experience[]>(this.url + "/4");
}
editarDatosExperiencia(experience: Experience): Observable<any> {
  return this.http.put(this.url + '/editar', experience);
}
crearExperiencia(experience: Experience): Observable<Experience[]> {
  return this.http.post<Experience[]>(this.url + '/crear', experience); 
}
eliminarExperiencia(id: number): Observable<any> {
  return this.http.delete(this.url + '/' + id);
}


}