import { Alignment } from "./alignment";
import { CharacterClass } from "./characterClass";
import { Language } from "./language";
import { Specie } from "./specie";

export interface Character {
  id: number;
  name: string;
  image: string;
  specie: Specie;
  class: CharacterClass;
  alignment: Alignment;
  languages: Language[];
}
