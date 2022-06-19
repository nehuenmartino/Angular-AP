export class Education {
  id: number;
  school: string;
  title: string;
  img: string;
  periodo: string;
  idPerson: number;

  constructor(
    id: number,
    school: string,
    title: string,
    img: string,
    periodo: string,
    idPerson: number
  ) {
    this.id = id;
    this.school = school;
    this.title = title;
    this.img = img;
    this.periodo = periodo;
    this.idPerson = idPerson;
  }
}
