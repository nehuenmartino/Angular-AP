import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  education: any;

  constructor(private servicioDePersona: PersonService) {}

  ngOnInit(): void {
    this.servicioDePersona.obtenerDatosEducacion().subscribe((data) => {
      this.education = data['education'];
    });
  }
}
