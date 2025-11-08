// import * as view from "./view.js";
// import Grid from "https://pbollhorn.github.io/datastruktur-portfolio/grid/grid.js";
import * as model from "./model.js";

function startController() {
  console.log("Hello from startController");
  // view.registerEventHandlers();

  model.startModel();

  console.log("Goodbye from startController");
}

startController();
