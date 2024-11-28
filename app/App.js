import { AuthController } from './controllers/AuthController.js';
import { AccountController } from './controllers/AccountController.js';
import { HomeController } from './controllers/HomeController.js';
import { RegionsController } from './controllers/RegionsController.js';
import { SandboxPokemonController } from './controllers/SandboxPokemonController.js';
import { WildPokemonController } from './controllers/WildPokemonController.js';
import { router } from './router-config.js';


class App {
  AuthController = new AuthController();
  AccountController = new AccountController();
  HomeController = new HomeController();
  RegionsController = new RegionsController();
  SandboxPokemonController = new SandboxPokemonController();
  WildPokemonController = new WildPokemonController();

  constructor() {
    if (USE_ROUTER) {
      this.router = router
      this.router.init(this)
      console.log("App successfully initialized");
    }
  }
}

const app = new App();
window.app = app;

