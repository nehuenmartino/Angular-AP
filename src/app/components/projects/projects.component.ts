import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/entities/project';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  listProjects!: Project[];
  usuarioAutenticado: boolean = true;
  form!: FormGroup;

  constructor(
    private servicioDeProyecto: ProjectService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      id:[''],
      title: ['', [Validators.required]],
      img: ['', [Validators.required, Validators.pattern('https?://.+')]],
      description: ['', [Validators.required]],
      date: ['', [Validators.required]],
      link: ['', [Validators.required, Validators.pattern('https?://.+')]],
      idPerson: ['4']
    });
  }

  ngOnInit(): void {
    this.servicioDeProyecto.obtenerDatosProyectos().subscribe((data) => {
      this.listProjects = data;
    });
  }
  guardarProyectos(item:Project) {
    if (this.form.valid) {
      let projectEdit = new Project(             
        this.form.controls['id'].value,
        this.form.controls['title'].value,
        this.form.controls['img'].value,
        this.form.controls['description'].value,
        this.form.controls['date'].value,
        this.form.controls['link'].value,
        this.form.controls['idPerson'].value
        
      );
      this.servicioDeProyecto.editarDatosProyecto(projectEdit).subscribe(
        (data) => {
          item = projectEdit;
          document.getElementById('cerrarProyectos')?.click();
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

  crearProyecto() {
    this.servicioDeProyecto
      .crearProyecto(this.form.value)
      .subscribe((data) => {
        this.listProjects.push();
        alert('Educación agregada');
        setTimeout(() => {
          this.ngOnInit();
        }, 0);
      });
      document.getElementById('cerrarNuevoProyecto')?.click();
  }
  
  mostrarDatosProyectos(item:Project) {

    this.form.get('id')?.setValue(item.id);
    this.form.get('title')?.setValue(item.title);
    this.form.get('img')?.setValue(item.img);
    this.form.get('description')?.setValue(item.description);
    this.form.get('date')?.setValue(item.date);
    this.form.get('link')?.setValue(item.link);
    this.form.get('idPerson')?.setValue(item.idPerson);
                
  }
  eliminarProyecto(item: Project) {
    if (confirm('¿Desea eliminar el registro?')) {
      this.servicioDeProyecto.eliminarProyecto(item.id).subscribe((data) => {
        this.listProjects.splice(this.listProjects.indexOf(item), 1);
      });
    }
  }

  get id() {
    return this.form.get('id');
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
  get idPerson() {
    return this.form.get('idPerson');
  }
}
