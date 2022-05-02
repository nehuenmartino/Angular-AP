import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
  person: any;

  constructor(private servicioDePersona: PersonService) {}

  ngOnInit(): void {
    this.servicioDePersona.obtenerDatosPersona().subscribe((data) => {
      console.log(data);
      this.person = data['Person'];
    });
  }
}
