import Grid from "https://pbollhorn.github.io/datastruktur-portfolio/grid/grid.js";

// Global variable to hold the grid
let grid;

export function resetBoard(rows, cols) {
  grid = new Grid(rows, cols, false);
}

// export function setBoard(newGrid) {
//   grid = newGrid;
// }

export function setCell(row, col) {
  const value = grid.get({ row, col });
  grid.set({ row, col }, !value);
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
  if (liveNeighbourCount == 2) return grid.get({ row, col });
  if (liveNeighbourCount == 3) return true;
  if (liveNeighbourCount > 3) return false;
}

// Progress model to next generation
export function nextGeneration() {
  const newGrid = new Grid(grid.rows(), grid.cols(), false);

  for (let row = 0; row < grid.rows(); row++) {
    for (let col = 0; col < grid.cols(); col++) {
      const cellLife = this.doesCellLive(row, col); // true or false
      newGrid.set({ row, col }, cellLife);
    }
  }

  grid = newGrid;
}
