import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';
@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  person: any;  

  constructor(private servicioDePersona:PersonService) { }

  ngOnInit(): void {
    this.servicioDePersona.obtenerDatosPersona().subscribe(data => {
      console.log(data);
      this.person=data;
      
    });
  }}