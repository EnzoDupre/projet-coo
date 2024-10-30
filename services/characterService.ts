import { Character } from "../types/character";
import { IApiService } from "../interfaces/IApiService";
import { ICharacterRepository } from "../interfaces/ICharacterRepository";
import { Config, JsonDB } from "node-json-db";

const db = new JsonDB(new Config("characterDB", true, false, "/"));

export class CharacterService {
  constructor(
    private apiService: IApiService,
    private characterRepository: ICharacterRepository
  ) {}

  async getCharacterCreationInfo() {
    try {
      const speciesList = await this.apiService.getSpecies();
      const classesList = await this.apiService.getClasses();
      const alignmentsList = await this.apiService.getAlignments();

      const speciesDetails = await Promise.all(
        speciesList.results.map(async (specie: any) => {
          const specieDetails = await this.apiService.getSpecieDetails(
            specie.index
          );
          return { ...specie, ...specieDetails };
        })
      );

      const classDetails = await Promise.all(
        classesList.results.map(async (classItem: any) => {
          const classData = await this.apiService.getClassDetails(
            classItem.index
          );
          const spells = await this.apiService.getSpellsForClass(
            classItem.index
          );
          return { ...classItem, ...classData, spells: spells.results };
        })
      );

      return {
        species: speciesDetails,
        classes: classDetails,
        alignments: alignmentsList.results,
      };
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des informations de création :",
        error
      );
      throw error;
    }
  }

  async createCharacter(
    characterData: Omit<Character, "id">
  ): Promise<Character> {
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
    return this.characterRepository.getAll();
  }

  async getCharacterById(id: number): Promise<Character | undefined> {
    return this.characterRepository.getById(id);
  }
}
