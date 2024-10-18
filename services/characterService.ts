import { Character } from "../types/character";
import { ApiService } from "./apiService";
import { JsonDB, Config } from "node-json-db";

const db = new JsonDB(new Config("characterDB", true, false, "/"));

export class CharacterService {
  private apiService: ApiService;

  constructor() {
    this.apiService = new ApiService();
  }

  async getCharacterCreationInfo() {
    const species = await this.apiService.getSpecies();
    const classes = await this.apiService.getClasses();
    const alignments = await this.apiService.getAlignments();

    return { species, classes, alignments };
  }

  async createCharacter(characterData: Omit<Character, "id">) {
    try {
      const characters: Character[] = (await db.getData("/characters")) || [];
      const newId =
        characters.length > 0 ? characters[characters.length - 1].id + 1 : 1;
      const newCharacter: Character = { id: newId, ...characterData };
      characters.push(newCharacter);
      await db.push("/characters", characters, true);
      return newCharacter;
    } catch (error) {
      console.error("Erreur lors de la création du personnage :", error);
      throw error;
    }
  }

  async getAllCharacters(): Promise<Character[]> {
    try {
      const characters: Character[] = (await db.getData("/characters")) || [];
      return characters;
    } catch (error) {
      console.error("Erreur lors de la récupération des personnages :", error);
      return [];
    }
  }

  async getCharacterById(id: number): Promise<Character | undefined> {
    try {
      const characters: Character[] = (await db.getData("/")) || [];
      return characters.find((character) => character.id === id);
    } catch (error) {
      console.log(error);
      console.error(
        `Erreur lors de la récupération du personnage avec l'ID ${id} :`,
        error
      );
      return undefined;
    }
  }
}
