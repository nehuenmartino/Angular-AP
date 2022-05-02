import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  proyect: any;

  constructor(private servicioDePersona:PersonService) { }

  ngOnInit(): void {
    this.servicioDePersona.obtenerDatosPersona().subscribe(data => {
      console.log(data);
      this.proyect=data["proyect"];
      
    });
  }}