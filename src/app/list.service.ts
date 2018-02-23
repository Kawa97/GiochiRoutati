import { Game } from "./Game";

export class ListService {
    private items: Game[] = [
        new Game(0,"Shish","Molto bello","Fps",87,50,"2014"),
        new Game(1, "Manga"),
        new Game(2, "Disney", "Pippo"),
        new Game(3, "Disney", "Pluto")
    ];

    getGamesList(): Game[] {
        return this.items;
    }

    getGameById(id: number): Game {
        for (let character of this.items) {
            if (character.id == id)
                return character;
        }
        return null;
    }
}