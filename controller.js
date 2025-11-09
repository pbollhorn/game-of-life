import * as view from "./view.js";
import * as model from "./model.js";

export function resetBoard(rows, cols) {
  model.resetBoard(rows, cols);
}

// Controlleren skal have denne funktion:

// - `setCell(row, col)` der vil bliv kaldt når der klikkes på en celle. Den skal blot skrive en hardcoded værdi - fx 1 - ind i modellen på det pågældende sted, og dump’e hele modellen til konsollen.
export function setCell(row, col) {
  model.setCell(row, col);
  const grid = model.getBoard();
  view.displayBoard(grid);
}

export async function startSimulation() {
  console.log("hello from startSimulation");

  while (true) {
    console.log("new generation");

    await sleep(1000);
  }
}


function countNeighbors(){


  
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Startup code which is only run once - on page load
console.log("Hello from controllers startup code");
view.registerEventHandlers();
view.clickedResetBoardButton();
console.log("Goodbye from controllers startup code");
