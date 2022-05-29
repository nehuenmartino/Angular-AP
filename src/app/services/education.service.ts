import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../entities/education';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  url: string = "http://localhost:8080/experiencia";
  constructor(private http: HttpClient) {}

  obtenerDatosEducacion(): Observable<Education[]> {
    return this.http.get<Education[]>(this.url + "/4");
  }
  editarDatosEducacion(education: Education): Observable<any> {
    return this.http.put(this.url + '/editar', education);
  }
  crearEducacion(education: Education): Observable<Education[]> {
    return this.http.post<Education[]>(this.url + '/crear', education); 
  }
  eliminarEducacion(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }
}
