import * as controller from "./controller.js";

export function registerEventHandlers() {
  const resetBoardButton = document.getElementById("resetBoardButton");
  resetBoardButton.addEventListener("click", clickedResetBoardButton);

  const runGameButton = document.getElementById("runGameButton");
  runGameButton.addEventListener("click", clickedRunGameButton);

  const board = document.getElementById("board");
  board.addEventListener("click", clickedBoard);
}

export function clickedResetBoardButton() {
  const board = document.getElementById("board");
  const rows = document.getElementById("rowsInput").value;
  const cols = document.getElementById("colsInput").value;

  // This removes all children from the board
  board.innerHTML = "";

  // Sets the CSS property which controls number of columns
  board.style.gridTemplateColumns = `repeat(${cols}, max-content)`;

  // Loop over rows and cols and create child elements for the board (the cells)
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      board.appendChild(createCellElement(row, col));
    }
  }

  controller.resetBoard(rows, cols);
}

function clickedRunGameButton() {
  controller.runGame();
}

function createCellElement(row, col) {
  let cell = document.createElement("div");
  cell.className = "cell empty";
  cell.setAttribute("data-row", row);
  cell.setAttribute("data-col", col);
  return cell;
}

function clickedBoard(event) {
  const target = event.target;
  if (target.classList.contains("cell")) {
    const row = parseInt(target.dataset.row);
    const col = parseInt(target.dataset.col);
    controller.setCell(row, col);
  }
}

export function displayBoard(grid) {
  const board = document.getElementById("board");

  // Loop over all children of the board (which are the cells)
  for (const cell of board.children) {
    const row = parseInt(cell.dataset.row);
    const col = parseInt(cell.dataset.col);

    // Set CSS classes for cell depending on true/false value in grid
    switch (grid.get({ row, col })) {
      case true:
        cell.className = "cell filled";
        break;
      case false:
        cell.className = "cell empty";
        break;
    }
  }
}

export function displayGenerationNumber(generationNumber) {
  const generationCounter = document.getElementById("generationCounter");
  generationCounter.innerText = generationNumber;
}
