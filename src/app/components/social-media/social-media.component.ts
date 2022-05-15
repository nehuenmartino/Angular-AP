import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {
  person: any;
  constructor(private servicioDePersona: PersonService) {}

  ngOnInit(): void {
    this.servicioDePersona.obtenerDatosPersona().subscribe((data) => {
      console.log(data);
      this.person = data['Person'];
    });
  }
}
