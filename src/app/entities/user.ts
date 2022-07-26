export class User {
  id: number;  
  usuario:string;
    pwd:string;

    constructor(
      id: number,
      usuario: string,
      pwd: string,
    ) {
      this.id = id;
      this.pwd = pwd;
      this.usuario = usuario;
      
    }
  }