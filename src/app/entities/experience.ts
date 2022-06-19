export class Experience {
  id: number;
  job: string;
  img: string;
  description: string;
  periodo: string;
  idPerson: number;

  constructor(
    id: number,
    job: string,
    img: string,
    description: string,
    periodo: string,
    idPerson: number
  ) {
    this.id = id;
    this.job = job;
    this.img = img;
    this.description = description;
    this.periodo = periodo;
    this.idPerson = idPerson;
  }
}
