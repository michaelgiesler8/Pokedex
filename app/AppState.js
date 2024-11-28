import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js';

class ObservableAppState extends EventEmitter {
  account = null;
  user = null;
  regions = [];
  wildPokemon = [];
  myPokemon = [];
  activeRegion = null;
  activePokemon = null;
}

export const AppState = createObservableProxy(new ObservableAppState());