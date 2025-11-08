// import * as view from "./view.js";
import Grid from "https://pbollhorn.github.io/datastruktur-portfolio/grid/grid.js";

function startController() {
  console.log("Goodbye from startController");
  // view.registerEventHandlers();

  const myGrid = new Grid(5, 3);
  console.log(myGrid);
  myGrid.printGrid();
}

startController();
