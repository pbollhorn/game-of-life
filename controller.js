import * as view from "./view.js";

function startController() {
  console.log("hello from startController");
  view.registerEventHandlers();
}

startController();
