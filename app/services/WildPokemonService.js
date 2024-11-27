import { AppState } from "../AppState.js";
import { pokeAPI } from "./AxiosService.js";
import { Pokemon } from "../models/Pokemon.js";

class WildPokemonService {
  async getWildPokemon() {
    const res = await pokeAPI.get('pokemon?limit=151');
    AppState.wildPokemon = res.data.results.map((p) => new Pokemon(p));
  }

  async getActivePokemon(pokemonName) {
    const res = await pokeAPI.get(`pokemon/${pokemonName}`);
    AppState.activePokemon = new Pokemon(res.data);
  }
}

export const wildPokemonService = new WildPokemonService();