export class Skill {
    id: number;
    skill: string;
    img: string;
    idPerson: number;
  
    constructor(
        id: number,
        skill: string,
        img: string,
        idPerson: number
      
    ) {
      this.id = id;
      this.skill =skill;
      this.img = img;
      this.idPerson = idPerson;
      
    }
}  