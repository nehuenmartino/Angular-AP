import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Education } from 'src/app/entities/education';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})

export class EducationComponent implements OnInit {
  education: any;
  usuarioAutenticado: boolean= true;
  form!: FormGroup;

  constructor(private servicioDePersona: PersonService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({     
      
      school: ['', [Validators.required]],
      title: ['', [Validators.required]],
      img: ['', [Validators.required, Validators.pattern('https?://.+')]],
      period: ['', [Validators.required]]
      
    })
  }

  ngOnInit(): void {
    this.servicioDePersona.obtenerDatosEducacion().subscribe((data) => {
      this.education = data['education'];
    });
  }

  guardarEducacion() {
    if (this.form.valid) {
      let educationEdit = new Education(             
        
        this.form.controls['school'].value,
        this.form.controls['title'].value,
        this.form.controls['img'].value,
        this.form.controls['period'].value
        
      );
      this.servicioDePersona.editarDatosEducacion(educationEdit).subscribe(
        (data) => {
          this.education = educationEdit;
          this.form.reset();
          document.getElementById('cerrarEducacion')?.click();
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
  mostrarDatosEducacion() {

    this.form.get('img')?.setValue(this.education.img);
    this.form.get('school')?.setValue(this.education.school);
    this.form.get('period')?.setValue(this.education.period);
    this.form.get('title')?.setValue(this.education.title);
            
  }

  get school() {
    return this.form.get('school');
  }

  get title() {
    return this.form.get('title');
  }

  get img() {
    return this.form.get('img');
  }
  get period() {
    return this.form.get('period');
  }
}
