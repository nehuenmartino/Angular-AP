import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../entities/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url: string = "https://backend-ap-deploy.herokuapp.com/login";
  constructor(private http: HttpClient) { }

  comprobarUsuario(user: User): Observable<any>{
    return this.http.post(this.url, user);
  }
  
}
