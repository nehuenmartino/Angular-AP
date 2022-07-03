export class SocialMedia {
    id: number;
  email: string;
    github: string;
    linkedin: string;
    codepen: string;
    instagram: string;
    idPerson: number;
  
    constructor(
      id: number,
      email: string,
      github: string,
      linkedin: string,
      codepen: string,
      instagram: string,
      idPerson: number
    ) {
      this.id = id;
      this.email = email;
      this.github = github;
      this.linkedin = linkedin;
      this.codepen = codepen;
      this.instagram = instagram;
      this.idPerson = idPerson;
    }
  }