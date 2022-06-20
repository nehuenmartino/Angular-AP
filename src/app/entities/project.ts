export class Project {
  id: number;
  title: string;
  img: string;
  description: string;
  date: string;
  link: string;
  idPerson: number;

  constructor(
    id: number,
    title: string,
    img: string,
    description: string,
    date: string,
    link: string,
    idPerson: number
  ) {
    this.id = id;
    this.title = title;
    this.img = img;
    this.description = description;
    this.date = date;
    this.link = link;
    this.idPerson = idPerson;
  }
}
