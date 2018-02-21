import { Character } from "./character";

export class ListService {
    private items: Character[] = [
        new Character(0),
        new Character(1, "Manga"),
        new Character(2, "Disney", "Pippo"),
        new Character(3, "Disney", "Pluto", 45)
    ];

    getCharactersList(): Character[] {
        return this.items;
    }

    getCharacterById(id: number): Character {
        for (let character of this.items) {
            if (character.id == id)
                return character;
        }
        return null;
    }
}