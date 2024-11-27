import { AppState } from "../AppState.js";
import { regionsService } from "../services/RegionsService.js";
import { setHTML } from "../utils/Writer.js";

function _drawRegions() {
  const regions = AppState.regions.map(
    (region) => `<button onclick="app.RegionsController.setActiveRegion('${region.name}')">${region.name}</button>`
  ).join('');
  setHTML('regions', regions);
}

export class RegionsController {
  constructor() {
    AppState.on('regions', _drawRegions);
    this.getRegions();
  }

  async getRegions() {
    try {
      await regionsService.getRegions();
    } catch (error) {
      console.error(error);
    }
  }

  setActiveRegion(regionName) {
    const region = AppState.regions.find((r) => r.name === regionName);
    AppState.activeRegion = region;
    console.log('Active Region:', region);
  }
}