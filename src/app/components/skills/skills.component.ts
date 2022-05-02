import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: any;

  constructor(private servicioDePersona: PersonService) {}

  ngOnInit(): void {
    this.servicioDePersona.obtenerDatosHabilidades().subscribe((data) => {
      this.skills = data['skills'];
    });
  }
}
