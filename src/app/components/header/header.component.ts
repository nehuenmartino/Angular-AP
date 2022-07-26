import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  usuario={
    email:'',
    password:''
      }
usuarioAutenticado= this.authService.getUserLogged();


  constructor(private authService: AuthService) { 
  
}

ngOnInit(): void {}
Ingresar(){
  console.log(this.usuario);
  const{email,password}= this.usuario;
  this.authService.login(email,password).then(res=>{
    console.log("Usuario logueado con éxito: ", res);
  })
}
logout(){
  this.authService.logout();
}

}
