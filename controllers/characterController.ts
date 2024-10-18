import { Request, Response } from "express";
import { CharacterService } from "../services/characterService";

const characterService = new CharacterService();

export class CharacterController {
  static async getCharacterCreationInfo(req: Request, res: Response) {
    try {
      const data = await characterService.getCharacterCreationInfo();
      
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: "Error fetching creation info" });
    }
  }

  static async createCharacter(req: Request, res: Response) {
    try {
      const characterData = req.body;
      const character = await characterService.createCharacter(characterData);
      res.status(201).json(character);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error creating character" });
    }
  }
}
