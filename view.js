export function registerEventHandlers() {
  // lav event handler på board
  // så når der bliver trykket på en .cell
  // kaldes clickedCell()
  console.log("hello from registerEventHandlers");

  const board = document.getElementById("board");
  board.addEventListener("click", clickedBoard);
}

function clickedBoard(event) {
  const target = event.target;

  if (target.classList.contains("cell")) {
    const row = target.dataset.row;
    const col = target.dataset.col;
    console.log("Clicked cell with row: ", row, "col: ", col);
  }
}

export function createBoardInDom() {
  const board = document.getElementById("board");

  const rows = 5;
  const cols = 30;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      board.appendChild(createCellElement(row, col));
    }
  }
}

function createCellElement(row, col) {
  let div = document.createElement("div");
  div.className = "empty-cell";
  div.setAttribute("data-row", row);
  div.setAttribute("data-col", col);
  return div;
}
