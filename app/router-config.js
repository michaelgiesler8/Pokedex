import { AccountController } from "./controllers/AccountController.js";
import { HomeController } from "./controllers/HomeController.js";
import { AuthGuard } from "./services/AuthService.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: "",
    controllers: [HomeController],
    view: /*html*/`
      <div id="home">
        <h1>Welcome to the Pokedex</h1>
        <button onclick="app.HomeController.testButton()">Test</button>
      </div>
    `,
  },
  {
    path: "#/account",
    middleware: [AuthGuard],
    controllers: [AccountController],
    view: /*html*/`
      <div id="account-form"></div>
      <div id="account-details"></div>
    `,
  }
])




