import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {SocialMedia} from '../entities/socialmedia';
@Injectable({
  providedIn: 'root'
})
export class SocialmediaService {
  url: string="https://backend-ap-deploy.herokuapp.com/redes";

  constructor(private http:HttpClient) {
   }
   obtenerDatosRedes():Observable<SocialMedia>{
    return this.http.get<SocialMedia>(this.url+"/1");
   }
   editarDatosRedes(socialmedia:SocialMedia):Observable<any>{
     return this.http.put(this.url + '/editar', socialmedia);
   }  
}
