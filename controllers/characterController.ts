import { Request, Response } from "express";
import { CharacterService } from "../services/characterService";

export class CharacterController {
  constructor(private characterService: CharacterService) {}

  async getCharacterCreationInfo(req: Request, res: Response) {
    try {
      const data = await this.characterService.getCharacterCreationInfo();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: "Error fetching creation info" });
    }
  }

  async createCharacter(req: Request, res: Response) {
    try {
      const characterData = req.body;
      const character = await this.characterService.createCharacter(characterData);
      res.status(201).json(character);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error creating character" });
    }
  }
}