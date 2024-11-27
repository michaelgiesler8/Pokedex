import { AppState } from "../AppState.js";
import { pokeAPI } from "./AxiosService.js";
import { Region } from "../models/Region.js";

class RegionsService {
  async getRegions() {
    const res = await pokeAPI.get('region');
    AppState.regions = res.data.results.map((region) => new Region(region));
  }
}

export const regionsService = new RegionsService();