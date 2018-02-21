export class Character{
    id: number;
    type: string;
    name: string;
    age: number;
    
    constructor(id: number, type: string = "Disney", name: string = "topolino", age: number = 100){
        this.id=id;
        this.type = type;
        this.name = name;
        this.age = age;
    }
}