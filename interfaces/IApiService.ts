import { ApiResult } from "../types/apiResult";

export interface IApiService {
  getSpecies(): Promise<ApiResult>;
  getSpecieDetails(specieIndex: string): Promise<any>;
  getClasses(): Promise<ApiResult>;
  getClassDetails(classIndex: string): Promise<any>;
  getSpellsForClass(classIndex: string): Promise<any>;
  getAlignments(): Promise<ApiResult>;
}
