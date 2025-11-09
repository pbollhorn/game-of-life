import * as controller from "./controller.js";

// Registers event handlers and creates board
export function startView() {
  const resetBoardButton = document.getElementById("resetBoardButton");
  resetBoardButton.addEventListener("click", clickedResetBoardButton);

  const board = document.getElementById("board");
  board.addEventListener("click", clickedBoard);

  // Run clickedResetBoardButton which creates the board
  clickedResetBoardButton();
}

export function clickedResetBoardButton() {
  const rows = document.getElementById("rowsInput").value;
  const cols = document.getElementById("colsInput").value;
  const board = document.getElementById("board");

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

function clickedBoard(event) {
  const target = event.target;
  if (target.classList.contains("cell")) {
    const row = target.dataset.row;
    const col = target.dataset.col;
    controller.setCell(row, col);
  }
}

function createCellElement(row, col) {
  let div = document.createElement("div");
  div.className = "cell empty";
  div.setAttribute("data-row", row);
  div.setAttribute("data-col", col);
  return div;
}

// View skal have denne metode:

// - `displayBoard()` - opdaterer det visuelle board så det matcher modellen.
//     - oversæt 0, 1 og 2 i modellen til henholdsvis tomt felt, kryds, og bolle i viewet

// Sørg for at displayBoard() bliver kaldt automatisk fra controlleren, når der sker ændringer på boardet.
function displayBoard() {}
