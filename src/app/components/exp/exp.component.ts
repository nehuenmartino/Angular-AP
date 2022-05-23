import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experience } from 'src/app/entities/experience';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.css'],
})
export class ExpComponent implements OnInit {
    exp: any;
    usuarioAutenticado: boolean= true;
    form!: FormGroup;
  
    constructor(
      private servicioDePersona: PersonService, 
      private formBuilder: FormBuilder
      ) {
      this.form = this.formBuilder.group({     
        
        job: ['', [Validators.required]],
        img: ['', [Validators.required, Validators.pattern('https?://.+')]],
        description: ['', [Validators.required]],
        period: ['', [Validators.required]]
        
      });
    }
  
    ngOnInit(): void {
      this.servicioDePersona.obtenerDatosExperiencia().subscribe((data) => {
        this.exp = data['exp'];
      });
    }
  
    guardarExperiencia() {
      if (this.form.valid) {
        let experienceEdit = new Experience(             
          
          this.form.controls['job'].value,
          this.form.controls['img'].value,
          this.form.controls['description'].value,
          this.form.controls['period'].value
          
        );
        this.servicioDePersona.editarDatosExperiencia(experienceEdit).subscribe(
          (data) => {
            this.exp = experienceEdit;
            this.form.reset();
            document.getElementById('cerrarExperiencia')?.click();
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
    mostrarDatosExperiencia() {
  
      
      this.form.get('job')?.setValue(this.exp.job);
      this.form.get('img')?.setValue(this.exp.img);
      this.form.get('description')?.setValue(this.exp.description);
      this.form.get('period')?.setValue(this.exp.period);
      
              
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
    get period() {
      return this.form.get('period');
    }
  }
  