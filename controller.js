import * as view from "./view.js";
// import Grid from "https://github.com/pbollhorn/datastruktur-portfolio/blob/main/grid/grid.js";
// import Grid from "https://raw.githubusercontent.com/pbollhorn/datastruktur-portfolio/main/grid/grid.js";
// import Grid from "https://cors-anywhere.herokuapp.com/https://github.com/pbollhorn/datastruktur-portfolio/blob/main/grid/grid.js";
// import Grid from "https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/pbollhorn/datastruktur-portfolio/main/grid/grid.js";
import Grid from "https://pbollhorn.github.io/omvendt-gaet-et-tal/grid.js";

function startController() {
  console.log("hello from startController");
  view.registerEventHandlers();

  const myGrid = new Grid(5, 3);
  console.log(myGrid);
  myGrid.printGrid();
  console.log("Goodbye startController");
}

startController();
