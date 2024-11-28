import { AppState } from "../AppState.js";
import { sandboxPokemonService } from "../services/SandboxPokemonService.js";
import { setHTML } from "../utils/Writer.js";

function _drawSandboxPokemon() {
  const pokemon = AppState.myPokemon.map(
    (p) => `<div>${p.name} <button onclick="app.SandboxPokemonController.releasePokemon('${p.id}')">Release</button></div>`
  ).join('');
  setHTML('sandbox-pokemon', pokemon);
}

export class SandboxPokemonController {
  constructor() {
    AppState.on('myPokemon', _drawSandboxPokemon);
    this.getMyPokemon();
  }

  async getMyPokemon() {
    try {
      await sandboxPokemonService.getMyPokemon();
    } catch (error) {
      console.error(error);
    }
  }

  async releasePokemon(pokemonID) {
    try {
      await sandboxPokemonService.releasePokemon(pokemonID);
    } catch (error) {
      console.error(error);
    }
  }

  async catchPokemon() {
    try {
      const pokemon = AppState.activePokemon;
      await sandboxPokemonService.catchPokemon(pokemon);
    } catch (error) {
      console.error(error);
    }
  }
}