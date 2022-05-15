import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person } from 'src/app/entities/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
  person: any;
  usuarioAutenticado: boolean = true;
  form!: FormGroup;

  constructor(
    private servicioDePersona: PersonService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      position: ['', [Validators.required]],
      description: ['', [Validators.required]],
      url: ['', [Validators.required, Validators.pattern('https?://.+')]],
    });
  }

  ngOnInit(): void {
    this.servicioDePersona.obtenerDatosPersona().subscribe((data) => {
      console.log(data);
      this.person = data['Person'];
    });
  }

  guardarAcercaDe() {
    if (this.form.valid) {
      let personEdit = new Person(
        this.form.controls['fullName'].value,
        this.form.controls['position'].value,
        this.form.controls['description'].value,
        this.form.controls['url'].value
      );
      this.servicioDePersona.editarDatosPersona(personEdit).subscribe(
        (data) => {
          this.person = personEdit;
          this.form.reset();
          document.getElementById('cerrarAcercaDe')?.click();
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
  mostrarDatos() {
    this.form.get('fullName')?.setValue(this.person.fullName);
    this.form.get('position')?.setValue(this.person.position);
    this.form.get('description')?.setValue(this.person.description);
    this.form.get('url')?.setValue(this.person.url);
  }

  get fullName() {
    return this.form.get('fullName');
  }

  get position() {
    return this.form.get('position');
  }

  get description() {
    return this.form.get('description');
  }
  get url() {
    return this.form.get('url');
  }
}
