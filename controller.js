import * as view from "./view.js";
import * as model from "./model.js";

function startController() {
  console.log("Hello from startController");

  view.startView();
  model.startModel();

  console.log("Goodbye from startController");
}

startController();
