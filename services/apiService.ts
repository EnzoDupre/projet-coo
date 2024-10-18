import axios from "axios";

export class ApiService {
  private apiUrl: string = "https://www.dnd5eapi.co/api/";

  async getSpecies() {
    const response = await axios.get(`${this.apiUrl}races`);
    return response.data;
  }

  async getClasses() {
    const response = await axios.get(`${this.apiUrl}classes`);
    return response.data;
  }

  async getAlignments() {
    const response = await axios.get(`${this.apiUrl}alignments`);
    return response.data;
  }
}
