import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person } from 'src/app/entities/person';
import { AuthService } from 'src/app/services/auth.service';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
  person!: Person;
  usuarioAutenticado= this.authService.getUserLogged();
  form!: FormGroup;

  constructor(
    private servicioDePersona: PersonService,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.form = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      position: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required, Validators.pattern('https?://.+')]]
    });
  }
  ngOnInit(): void {
    this.servicioDePersona.obtenerDatosPersona().subscribe((data) => {
      console.log(data);
      this.person = data;
    });
  }

  guardarAcercaDe() {
    if (this.form.valid) {
      let personEdit = new Person(
        this.person.id,
        this.form.controls['fullName'].value,
        this.form.controls['position'].value,
        this.form.controls['description'].value,
        this.form.controls['image'].value,
        
      );
      this.servicioDePersona.editarDatosPersona(personEdit).subscribe(
        (data) => {
          this.person = personEdit;
          this.form.reset();
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
    this.form.get('image')?.setValue(this.person.image);
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
  get image() {
    return this.form.get('image');
  }
}
