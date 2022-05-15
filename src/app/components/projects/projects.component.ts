import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  project: any;
  usuarioAutenticado: boolean= true;

  constructor(private servicioDePersona:PersonService) { }

  ngOnInit(): void {
    this.servicioDePersona.obtenerDatosPersona().subscribe(data => {
      console.log(data);
      this.project=data["proyect"];
      
    });
  }}