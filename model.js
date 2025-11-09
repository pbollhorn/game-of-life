import Grid from "https://pbollhorn.github.io/datastruktur-portfolio/grid/grid.js";

let grid;

export function startModel() {
  console.log("Hello from startModel");

  // const myGrid = new Grid(5, 3);
  // console.log(myGrid);

  // myGrid.printGrid();

  console.log("Goodbye from startModel");
}

export function resetBoard(rows, cols) {
  console.log("From model: resetting board with rows", rows, "cols ", cols);
  grid = new Grid(rows, cols);
  grid.printGrid();
}

export function setCell(row, col) {
  console.log("From model: Clicked cell with row: ", row, "col: ", col);
}
