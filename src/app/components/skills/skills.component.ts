import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/services/skill.service';
import { Skill } from 'src/app/entities/skill';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  listSkills!: Skill[];
  usuarioAutenticado: boolean = true;
  form!: FormGroup;

  constructor(
    private servicioDeHabilidad: SkillService,
    private formBuilder: FormBuilder
    ) {
      this.form = this.formBuilder.group({
        id: [''],
        skill: ['', [Validators.required]],
        img: ['', [Validators.required, Validators.pattern('https?://.+')]],
        idPerson: ['1']
      });
    }

  ngOnInit(): void {
    this.servicioDeHabilidad.obtenerDatosHabilidades().subscribe((data) => {
      this.listSkills = data;
    });
  }

  crearHabilidad() {
    this.servicioDeHabilidad
      .crearHabilidad(this.form.value)
      .subscribe((data) => {
        this.listSkills.push();
        alert('Habilidad agregada');
        setTimeout(() => {
          this.ngOnInit();
        }, 0);
      });
    document.getElementById('cerrarNuevaHabilidad')?.click();
  }

  eliminarHabilidad(item: Skill) {
    if (confirm('¿Desea eliminar el registro?')) {
      this.servicioDeHabilidad.eliminarHabilidad(item.id).subscribe((data) => {
        this.listSkills.splice(this.listSkills.indexOf(item), 1);
      });
    }
  }
  get id() {
    return this.form.get('id');
  }
  get skill() {
    return this.form.get('skill');
  }
  get img() {
    return this.form.get('img');
  }
  get idPerson() {
    return this.form.get('idPerson');
  }
}
