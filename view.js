// Registers event handlers and creates board
export function startView() {
  const resetButton = document.getElementById("resetButton");
  resetButton.addEventListener("click", clickedResetButton);

  const board = document.getElementById("board");
  board.addEventListener("click", clickedBoard);

  // Run clickedResetButton which creates the board
  clickedResetButton();
}

export function clickedResetButton() {
  const rows = document.getElementById("rowsInput").value;
  const cols = document.getElementById("colsInput").value;
  createBoard(rows, cols);
}

function clickedBoard(event) {
  const target = event.target;
  if (target.classList.contains("cell")) {
    const row = target.dataset.row;
    const col = target.dataset.col;
    console.log("Clicked cell with row: ", row, "col: ", col);
  }
}

function createBoard(rows, cols) {
  const board = document.getElementById("board");

  // This removes all children from the board
  board.innerHTML = "";

  // Sets the CSS property which controls number of columns
  board.style.gridTemplateColumns = `repeat(${cols}, max-content)`;

  // Loop over rows and cols and create child div elements in DOM
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      board.appendChild(createCellElement(row, col));
    }
  }
}

function createCellElement(row, col) {
  let div = document.createElement("div");
  div.className = "cell empty";
  div.setAttribute("data-row", row);
  div.setAttribute("data-col", col);
  return div;
}
