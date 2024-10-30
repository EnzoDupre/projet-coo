import axios from "axios";
import { IApiService } from "../interfaces/IApiService";
import { ApiResult } from "../types/apiResult";

export class ApiService implements IApiService {
  private apiUrl: string = "https://www.dnd5eapi.co/api/";

  async getSpecies(): Promise<ApiResult> {
    const response = await axios.get<ApiResult>(`${this.apiUrl}races`);
    return response.data;
  }

  async getSpecieDetails(specieIndex: string): Promise<any> {
    const response = await axios.get(`${this.apiUrl}races/${specieIndex}`);
    return response.data;
  }

  async getClasses(): Promise<ApiResult> {
    const response = await axios.get<ApiResult>(`${this.apiUrl}classes`);
    return response.data;
  }

  async getClassDetails(classIndex: string): Promise<any> {
    const response = await axios.get(`${this.apiUrl}classes/${classIndex}`);
    return response.data;
  }

  async getSpellsForClass(classIndex: string): Promise<any> {
    const response = await axios.get(`${this.apiUrl}classes/${classIndex}/spells`);
    return response.data;
  }

  async getAlignments(): Promise<ApiResult> {
    const response = await axios.get<ApiResult>(`${this.apiUrl}alignments`);
    return response.data;
  }
}