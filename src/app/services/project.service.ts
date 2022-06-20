import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Project } from 'src/app/entities/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  url: string = "http://localhost:8080/proyectos";
  constructor(private http: HttpClient) {}

  obtenerDatosProyectos(): Observable<Project[]> {
    return this.http.get<Project[]>(this.url + "/4");
  }
  editarDatosProyecto(project: Project): Observable<any> {
    return this.http.put(this.url + '/editar', project);
  }
  crearProyecto(project: Project): Observable<Project[]> {
    return this.http.post<Project[]>(this.url + '/crear', project); 
  }
  eliminarProyecto(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }
}
