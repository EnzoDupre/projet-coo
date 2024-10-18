import { Router } from "express";
import { CharacterController } from "../controllers/characterController";

export const router = Router();

router.get("/creation-info", CharacterController.getCharacterCreationInfo);
router.post("/character", CharacterController.createCharacter);
