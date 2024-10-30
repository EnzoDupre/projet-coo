import { Router } from "express";
import { CharacterController } from "../controllers/characterController";
import { CharacterService } from "../services/characterService";
import { ApiService } from "../services/apiService";
import { CharacterRepository } from "../repositories/CharacterRepository";

const apiService = new ApiService();
const characterRepository = new CharacterRepository();
const characterService = new CharacterService(apiService, characterRepository);
const characterController = new CharacterController(characterService);

export const router = Router();

router.get(
  "/creation-info",
  characterController.getCharacterCreationInfo.bind(characterController)
);
router.post(
  "/character",
  characterController.createCharacter.bind(characterController)
);
