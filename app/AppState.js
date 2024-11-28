import { EventEmitter } from './utils/EventEmitter.js'

class AppState extends EventEmitter {
  account = null;
  user = null;
  regions = [];
  wildPokemon = [];
  myPokemon = [];
  activeRegion = null;
  activePokemon = null;
}

export const AppState = new AppState