export class Project {
    title: string;
    img: string;
    description: string;
    date: string;
    link: string;
   
       constructor(title: string, img: string, description: string, date: string, link: string) {
           this.title = title;        
           this.img = img;
           this.description = description;
           this.date = date;
           this.link = link;
       }
   
       /*hacer getters y setters*/
   }