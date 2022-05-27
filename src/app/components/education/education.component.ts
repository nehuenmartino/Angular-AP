import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/entities/education';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  listEducation!: Education[];
  usuarioAutenticado: boolean = true;

  constructor(private servicioDeEducacion: EducationService) {}

  ngOnInit(): void {
    this.servicioDeEducacion.obtenerDatosEducacion().subscribe((data) => {
      this.listEducation = data;
    });
  }

mostrarDatosEducacion(item:Education) {
alert(JSON.stringify(item));
this.servicioDeEducacion.editarDatosEducacion(item).subscribe((data) => {})
}

  eliminarEducacion(item: Education) {
    this.servicioDeEducacion.eliminarEducacion(item.id).subscribe((data) => {
      this.listEducation.splice(this.listEducation.indexOf(item), 1);
    }); 
  }
}
