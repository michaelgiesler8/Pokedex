import { api } from "./AxiosService.js";
import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";

class SandboxPokemonService {
  async getMyPokemon() {
    const res = await api.get('api/pokemon');
    AppState.myPokemon = res.data.map((p) => new Pokemon(p));
  }

  async releasePokemon(pokemonId) {
    await api.delete(`api/pokemon/${pokemonId}`);
    AppState.myPokemon = AppState.myPokemon.filter((p) => p.id !== pokemonId);
  }

  async catchPokemon(pokemon) {
    const res = await api.post('api/pokemon', pokemon);
    AppState.myPokemon.push(new Pokemon(res.data));
  }
}

export const sandboxPokemonService = new SandboxPokemonService();