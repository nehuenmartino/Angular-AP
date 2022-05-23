import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonService } from 'src/app/services/person.service';
import { Project } from 'src/app/entities/project';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  project: any;
  usuarioAutenticado: boolean = true;
  form!: FormGroup;

  constructor(
    private servicioDePersona: PersonService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      img: ['', [Validators.required, Validators.pattern('https?://.+')]],
      description: ['', [Validators.required]],
      date: ['', [Validators.required]],
      link: ['', [Validators.required, Validators.pattern('https?://.+')]],
    });
  }

  ngOnInit(): void {
    this.servicioDePersona.obtenerDatosProyectos().subscribe((data) => {
      console.log(data);
      this.project = data['project'];
    });
  }
  guardarProyectos() {
    if (this.form.valid) {
      let projectEdit = new Project(             
        
        this.form.controls['title'].value,
        this.form.controls['img'].value,
        this.form.controls['description'].value,
        this.form.controls['date'].value,
        this.form.controls['link'].value
        
      );
      this.servicioDePersona.editarDatosProyectos(projectEdit).subscribe(
        (data) => {
          this.project = projectEdit;
          this.form.reset();
          document.getElementById('cerrarProyectos')?.click();
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
  mostrarDatosProyectos() {

    
    this.form.get('title')?.setValue(this.project.title);
    this.form.get('img')?.setValue(this.project.img);
    this.form.get('description')?.setValue(this.project.description);
    this.form.get('date')?.setValue(this.project.date);
    
            
  }

  get title() {
    return this.form.get('title');
  }  
  get img() {
    return this.form.get('img');
  }  
  get description() {
    return this.form.get('description');
  }
  get date() {
    return this.form.get('date');
  }
  get link(){
    return this.form.get('link');
  }
}
