import * as view from "./view.js";
import * as model from "./model.js";

function startController() {
  console.log("Hello from startController");

  model.startModel();

  view.createBoardInDom();
  view.registerEventHandlers();

  console.log("Goodbye from startController");
}

startController();
