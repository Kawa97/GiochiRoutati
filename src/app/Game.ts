export class Game{
    id: number;
    name: string;
    description:string;
    genre:string;
    rating:number;
    price:number;
    releaseDate:string;
    
    constructor(id: number,name: string = "bho",description: string = "bho",genre:string ="bho",
    rating:number =0,price:number=0,releaseDate:string="bho"){
        this.id=id;
        this.name = name;
        this.description = description;
        this.genre = genre;
        this.rating = rating;
        this.price = price;
        this.releaseDate = releaseDate;
    }
}