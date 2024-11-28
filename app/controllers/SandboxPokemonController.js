import { AppState } from "../AppState.js";
import { sandboxPokemonService } from "../services/SandboxPokemonService.js";
import { setHTML } from "../utils/Writer.js";
import { Pop } from "../utils/Pop.js";

function _drawMyPokemon() {
  const pokemon = AppState.myPokemon;
  let template = "";
  myPokemon.forEach((pokemon) => (template += pokemon.SandboxListTemplate));
  setHTML("sandbox-pokemon", pokemon);
}

export class SandboxPokemonController {
  constructor() {
    console.log("SandboxPokemonController loaded");
    AppState.on("myPokemon", _drawMyPokemon);
    this.getMyPokemon();
  }

  async getMyPokemon() {
    try {
      console.log("Fetching my Pokemon...");
      await sandboxPokemonService.getMyPokemon();
    } catch (error) {
      console.error("[SandboxPokemonController] Error fetching Pokemon", error);
      Pop.error(error.message);
    }
  }

  async releasePokemon(pokemonID) {
    try {
      console.log("Releasing Pokemon...");
      await sandboxPokemonService.releasePokemon(pokemonID);
      Pop.success("Pokemon released successfully.");
    } catch (error) {
      console.error("[SandboxPokemonController] Error releasing Pokemon", error);
      Pop.error(error.message);
    }
  }

  async catchPokemon() {
    try {
      if (!AppState.activePokemon) {
        Pop.error("No active Pokemon to catch!");
        return;
      }
      console.log("Catching Pokemon...");
      await sandboxPokemonService.catchPokemon(AppState.activePokemon);
      Pop.success(`${AppState.activePokemon.name} was caught!`);
    } catch (error) {
      console.error("[SandboxPokemonController] Error catching Pokemon", error);
    }
  }
}