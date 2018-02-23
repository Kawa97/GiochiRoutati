export class Game{
    id: number;
    name: string;
    descrizione:string;
    genere:string;
    rating:number;
    prezzo:number;
    annouscita:string;
    
    constructor(id: number,name: string = "bho",descrizione: string = "bho",genere:string ="bho",
    rating:number =null,prezzo:number=null,annouscita:string="bho"){
        this.id=id;
        this.name = name;
        this.descrizione = descrizione;
        this.genere = genere;
        this.rating = rating;
        this.prezzo = prezzo;
        this.annouscita = annouscita;
    }
}