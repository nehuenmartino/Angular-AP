import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  project: any;
  url!: string;
  usuarioAutenticado: boolean= true;

  constructor(private servicioDePersona:PersonService) { }

  ngOnInit(): void {
    this.servicioDePersona.obtenerDatosProyectos().subscribe((data) => {
      console.log(data);
      this.project = data["project"];      
    });
  }

  /*openLink(url: string){
  this.url = this.project.link
    window.open(this.project.link, "_blank")
  } 
  
  (click)="openLink(project.link)"*/
  
}
