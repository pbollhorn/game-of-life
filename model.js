import Grid from "https://pbollhorn.github.io/datastruktur-portfolio/grid/grid.js";

// Global variable to hold the grid
let grid;

export function resetBoard(rows, cols) {
  console.log("From model: resetting board with rows", rows, "cols ", cols);
  grid = new Grid(rows, cols);
  grid.fill(false);
  grid.printGrid();
}

export function setCell(row, col) {
  console.log("From model: Clicked cell with row: ", row, "col: ", col);
  const value = grid.get({ row, col });
  grid.set({ row, col }, !value);
  grid.printGrid();
}

export function getBoard(){
  return grid;
}