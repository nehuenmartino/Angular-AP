import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonService } from 'src/app/services/person.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
person: any;
usuarioAutenticado: boolean= false;
form!: FormGroup;

  constructor(
    private servicioDePersona: PersonService,
private formBuilder: FormBuilder
) { 
  this.form = this.formBuilder.group({
    user: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.pattern('https?://.+')]]
  })
}

ngOnInit(): void {
  this.servicioDePersona.obtenerDatosPersona().subscribe((data) => {
    console.log(data);
    this.person = data;
  });
}

comprobarUsuario(){
  if (this.form.valid){
    let usuarioAutenticado = true;
  } else
  this.form.markAllAsTouched();
      alert('Usuario o contraseña incorrectos.');
}
get user() {
  return this.form.get('user');
}

get password() {
  return this.form.get('password');
}

}
