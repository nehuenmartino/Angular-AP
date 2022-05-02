import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() {
    console.log("El servicio funciona");
   }
}
