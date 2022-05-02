import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.css']
})
export class ExpComponent implements OnInit {
  exp: any;

  constructor(private servicioDePersona: PersonService) {}

  ngOnInit(): void {
    this.servicioDePersona.obtenerDatosExperiencia().subscribe((data) => {
      this.exp = data['exp'];
    });
  }

}
