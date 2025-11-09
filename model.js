import Grid from "https://pbollhorn.github.io/datastruktur-portfolio/grid/grid.js";

// Global variable to hold the grid
let grid;

export function rows() {
  return grid.rows();
}

export function cols() {
  return grid.cols();
}

export function resetBoard(rows, cols) {
  console.log("From model: resetting board with rows", rows, "cols ", cols);
  grid = new Grid(rows, cols);
  grid.fill(false);
  grid.printGrid();
}

export function setGrid(newGrid) {
  grid = newGrid;
}

export function setCell(row, col) {
  console.log("From model: Clicked cell with row: ", row, "col: ", col);
  const value = grid.get({ row, col });
  grid.set({ row, col }, !value);
  grid.printGrid();
}

export function getBoard() {
  return grid;
}

function countLiveNeighbours(row, col) {
  const neighbourValues = grid.neighbourValues({ row, col });
  const liveNeighbourCount = neighbourValues.filter(
    (value) => value === true
  ).length;
  return liveNeighbourCount;
}

export function doesCellLive(row, col) {
  const liveNeighbourCount = countLiveNeighbours(row, col);
  if (liveNeighbourCount < 2) return false;
  if (liveNeighbourCount < 3) return false;
  return true;
}
