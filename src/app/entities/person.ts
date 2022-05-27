export class Person {
  id: number;
  fullName: string;
  position: string;
  description: string;
  image: string;

  constructor(
    id: number,
    fullName: string,
    position: string,
    description: string,
    image: string
    
  ) {
    this.id = id;
    this.fullName = fullName;
    this.position = position;
    this.description = description;
    this.image = image;
    
  }

  /*hacer getters y setters*/
}
