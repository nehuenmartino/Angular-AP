import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocialMedia } from 'src/app/entities/socialmedia';
import { AuthService } from 'src/app/services/auth.service';
import { SocialmediaService } from 'src/app/services/socialmedia.service';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {
  socialmedia!: SocialMedia;
  usuarioAutenticado= this.authService.getUserLogged();
  form!: FormGroup;
  constructor(
    private servicioDeRedes: SocialmediaService,
    private formBuilder: FormBuilder,
    private authService: AuthService
    ) {
      this.form = this.formBuilder.group({
        id:[''],
        email: ['', [Validators.required, Validators.email]],
        github: ['', [Validators.required]],
        linkedin: ['', [Validators.required]],
        codepen: ['', [Validators.required]],
        instagram: ['', [Validators.required]],
        idPerson: ['1']
      });
    }

  ngOnInit(): void {
    this.servicioDeRedes.obtenerDatosRedes().subscribe((data) => {
      this.socialmedia = data;
    });
  }

  mostrarDatosRedes() {
    this.form.get('email')?.setValue(this.socialmedia.email);
    this.form.get('github')?.setValue(this.socialmedia.github);
    this.form.get('linkedin')?.setValue(this.socialmedia.linkedin);
    this.form.get('codepen')?.setValue(this.socialmedia.codepen);
    this.form.get('instagram')?.setValue(this.socialmedia.instagram);
  }

  guardarDatosRedes(){
    if (this.form.valid) {
      let socialmediaEdit = new SocialMedia(
       this.socialmedia.id,
        this.form.controls['email'].value,
        this.form.controls['github'].value,
        this.form.controls['linkedin'].value,
        this.form.controls['codepen'].value,
        this.form.controls['instagram'].value,
        this.form.controls['idPerson'].value
        
      );
      this.servicioDeRedes.editarDatosRedes(socialmediaEdit).subscribe(
        (data) => {
          this.socialmedia = socialmediaEdit;  
          document.getElementById('cerrarRedes')?.click()      
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

  get id(){
    return this.form.get('id');
  }
  get email() {
    return this.form.get('email');
  }

  get github() {
    return this.form.get('github');
  }

  get linkedin() {
    return this.form.get('linkedin');
  }

  get codepen() {
    return this.form.get('codepen');
  }

  get instagram() {
    return this.form.get('instagram');
  }

  get idPerson() {
    return this.form.get('idPerson');
  }
}
