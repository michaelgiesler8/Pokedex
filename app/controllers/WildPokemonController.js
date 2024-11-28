import { AppState } from "../AppState.js";
import { wildPokemonService } from "../services/WildPokemonService.js";
import { setHTML } from "../utils/Writer.js";

function _drawWildPokemon() {
  const pokemonList = AppState.wildPokemon.map(
    (poke) => `<div onclick="app.WildPokemonController.setActivePokemon('${poke.name})">${poke.name}</div>`
  ).join('');
  setHTML('wild-pokemon', pokemonList);
}

function _drawActivePokemon() {
  const activePokemon = AppState.activePokemon;
  setHTML('active-pokemon', activePokemon?.Template || 'Select a Pokemon');
}

export class WildPokemonController {
  constructor() {
    AppState.on('wildPokemon', _drawWildPokemon);
    AppState.on('activePokemon', _drawActivePokemon);
    this.getWildPokemon();
  }

  async getWildPokemon() {
    try {
      await wildPokemonService.getWildPokemon();
    } catch (error) {
      console.error(error);
    }
  }

  async setActivePokemon(pokemonName) {
    try {
      await wildPokemonService.getActivePokemon(pokemonName);
    } catch (error) {
      console.error(error);
    }
  }
}
