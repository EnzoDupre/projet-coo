import { Character } from "../types/character";
import { ICharacterRepository } from "../interfaces/ICharacterRepository";
import { JsonDB, Config } from "node-json-db";

export class CharacterRepository implements ICharacterRepository {
  private db = new JsonDB(new Config("characterDB", true, false, "/"));

  async create(character: Character): Promise<Character> {
    const characters = await this.getAll();
    const newId =
      characters.length > 0 ? characters[characters.length - 1].id + 1 : 1;
    const newCharacter = { ...character, id: newId };
    characters.push(newCharacter);
    await this.db.push("/characters", characters, true);
    return newCharacter;
  }

  async getAll(): Promise<Character[]> {
    return (await this.db.getData("/characters")) || [];
  }

  async getById(id: number): Promise<Character | undefined> {
    const characters = await this.getAll();
    return characters.find((character) => character.id === id);
  }
}
