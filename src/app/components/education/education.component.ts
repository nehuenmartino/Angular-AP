import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  form!: FormGroup;

  constructor(
    private servicioDeEducacion: EducationService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      id: [''],
      img: ['', [Validators.required, Validators.pattern('https?://.+')]],
      school: ['', [Validators.required]],
      periodo: ['', [Validators.required]],
      title: ['', [Validators.required]],
      idPerson: ['4']
    });
  }

  ngOnInit(): void {
    this.servicioDeEducacion.obtenerDatosEducacion().subscribe((data) => {
      this.listEducation = data;
    });
  }

  guardarEducacion(item: Education) {
    if (this.form.valid) {
      let eduEdit = new Education(
        this.form.controls['id'].value,
        this.form.controls['school'].value,
        this.form.controls['title'].value,
        this.form.controls['img'].value,
        this.form.controls['periodo'].value,
        this.form.controls['idPerson'].value
      );
      this.servicioDeEducacion.editarDatosEducacion(eduEdit).subscribe(
        (data) => {
          item = eduEdit;
          document.getElementById('cerrarEducacion')?.click();
          this.form.reset();
          setTimeout(() => {
            this.ngOnInit();
          }, 0);
        },
        (error) => {
          alert(
            'Ups, no se ha podido procesar la solicitud. Intente nuevamente o contacte al administrador'
          );
        }
      );
    } else {
      this.form.markAllAsTouched();
      alert('HAY CAMPOS NO VALIDOS');
    }
  }

  crearEducacion() {
    this.servicioDeEducacion
      .crearEducacion(this.form.value)
      .subscribe((data) => {
        this.listEducation.push();
        alert('Educación agregada');
        setTimeout(() => {
          this.ngOnInit();
        }, 0);
      });
      document.getElementById('cerrarNuevaEducacion')?.click();
  }

  mostrarDatosEducacion(item: Education) {
    this.form.get('id')?.setValue(item.id);
    this.form.get('school')?.setValue(item.school);
    this.form.get('title')?.setValue(item.title);
    this.form.get('img')?.setValue(item.img);
    this.form.get('periodo')?.setValue(item.periodo);
    this.form.get('idPerson')?.setValue(item.idPerson);
  }

  eliminarEducacion(item: Education) {
    if (confirm('¿Desea eliminar el registro?')) {
      this.servicioDeEducacion.eliminarEducacion(item.id).subscribe((data) => {
        this.listEducation.splice(this.listEducation.indexOf(item), 1);
      });
    }
  }
  get id() {
    return this.form.get('id');
  }
  get img() {
    return this.form.get('img');
  }

  get school() {
    return this.form.get('school');
  }

  get periodo() {
    return this.form.get('periodo');
  }
  get title() {
    return this.form.get('title');
  }
  get idPerson() {
    return this.form.get('idPerson');
  }
}
