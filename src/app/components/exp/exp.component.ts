import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Experience} from 'src/app/entities/experience';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.css'],
})
export class ExpComponent implements OnInit {
  listExperience!: Experience[];
  usuarioAutenticado: boolean = true;
  form!: FormGroup;

  constructor(
    private servicioDeExperiencia: ExperienceService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      id: [''],
      job: ['', [Validators.required]],
      img: ['', [Validators.required, Validators.pattern('https?://.+')]],
      description: ['', [Validators.required]],
      periodo: ['', [Validators.required]],
      idPerson: ['1']
    });
  }

  ngOnInit(): void {
    this.servicioDeExperiencia.obtenerDatosExperiencia().subscribe((data) => {
      this.listExperience = data;
    });
  }

  guardarExperiencia(item: Experience) {
    if (this.form.valid) {
      let expEdit = new Experience(
        this.form.controls['id'].value,
        this.form.controls['job'].value,
        this.form.controls['img'].value,
        this.form.controls['description'].value,
        this.form.controls['periodo'].value,
        this.form.controls['idPerson'].value
      );
      this.servicioDeExperiencia.editarDatosExperiencia(expEdit).subscribe(
        (data) => {
          item = expEdit;
          document.getElementById('cerrarExperiencia')?.click();
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

  crearExperiencia() {
    this.servicioDeExperiencia
      .crearExperiencia(this.form.value)
      .subscribe((data) => {
        this.listExperience.push();
        alert('Experiencia agregada');
        setTimeout(() => {
          this.ngOnInit();
        }, 0);
      });
      document.getElementById('cerrarNuevaExperiencia')?.click();
  }

  mostrarDatosExperiencia(item: Experience) {
    this.form.get('id')?.setValue(item.id);
    this.form.get('job')?.setValue(item.job);
    this.form.get('img')?.setValue(item.img);
    this.form.get('description')?.setValue(item.description);
    this.form.get('periodo')?.setValue(item.periodo);
    this.form.get('idPerson')?.setValue(item.idPerson);
  }

  eliminarExperiencia(item: Experience) {
    if (confirm('¿Desea eliminar el registro?')) {
      this.servicioDeExperiencia.eliminarExperiencia(item.id).subscribe((data) => {
        this.listExperience.splice(this.listExperience.indexOf(item), 1);
      });
    }
  }
  get id() {
    return this.form.get('id');
  }
  get job() {
    return this.form.get('job');
  }
  get img() {
    return this.form.get('img');
  }
get description() {
    return this.form.get('description');
  }

  get periodo() {
    return this.form.get('periodo');
  }
  
  get idPerson() {
    return this.form.get('idPerson');
  }
}
