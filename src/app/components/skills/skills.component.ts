import { Component, OnInit } from '@angular/core';
import { SkillService} from 'src/app/services/skill.service';
import { Skill } from 'src/app/entities/skill'
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  listSkills!: Skill[];
usuarioAutenticado: boolean= true;
form!: FormGroup;
  constructor(private servicioDePersona: SkillService) {}

  ngOnInit(): void {
    this.servicioDePersona.obtenerDatosHabilidades().subscribe((data) => {
      this.listSkills = data['skills'];
    });
  }
  eliminarSkill(item: Skill){

  }
}
