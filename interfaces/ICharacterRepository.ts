import { Character } from "../types/character";

export interface ICharacterRepository {
  create(character: Character): Promise<Character>;
  getAll(): Promise<Character[]>;
  getById(id: number): Promise<Character | undefined>;
}
