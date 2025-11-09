import * as view from "./view.js";
import * as model from "./model.js";

function startController() {
  console.log("Hello from startController");

  view.startView();
  model.startModel();

  console.log("Goodbye from startController");
}

export function resetBoard(rows, cols) {
  model.resetBoard(rows, cols);
}

// Controlleren skal have denne funktion:

// - `setCell(row, col)` der vil bliv kaldt når der klikkes på en celle. Den skal blot skrive en hardcoded værdi - fx 1 - ind i modellen på det pågældende sted, og dump’e hele modellen til konsollen.
export function setCell(row, col) {
  model.setCell(row, col);
}

startController();
