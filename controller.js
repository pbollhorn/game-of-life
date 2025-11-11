import * as view from "./view.js";
import * as model from "./model.js";
import Grid from "https://pbollhorn.github.io/datastruktur-portfolio/grid/grid.js";

export function resetBoard(rows, cols) {
  model.resetBoard(rows, cols);
}

export function setCell(row, col) {
  model.setCell(row, col);
  const grid = model.getBoard();
  view.displayBoard(grid);
}

export async function runGame() {
  // const rows = model.rows();
  // const cols = model.cols();

  while (true) {
    // const newGrid = new Grid(rows, cols, false);

    // for (let row = 0; row < rows; row++) {
    //   for (let col = 0; col < cols; col++) {
    //     const cellLife = model.doesCellLive(row, col); // true or false
    //     newGrid.set({ row, col }, cellLife);
    //   }
    // }

    // model.setBoard(newGrid);

    model.nextGeneration();

    view.displayBoard(model.getBoard());

    await sleep(500);
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Startup code which is only run once - on page load
view.registerEventHandlers();
view.clickedResetBoardButton();
