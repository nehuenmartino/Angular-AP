import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from 'src/app/entities/skill';
@Injectable({
  providedIn: 'root',
})
export class SkillService {
  url: string = 'http://localhost:8080/habilidades';
  constructor(private http: HttpClient) {}

  obtenerDatosHabilidades(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.url + '/4');
  }
  crearHabilidad(skill: Skill): Observable<Skill[]> {
    return this.http.post<Skill[]>(this.url + '/crear', skill);
  }
  eliminarHabilidad(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }
}
