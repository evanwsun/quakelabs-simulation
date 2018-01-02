// @ts-check
const Cell = require("./cell.js");

function Grid(xSize, ySize) {
  this.xSize = xSize; // will always
  this.ySize = ySize;
  // console.log(this.xSize,this.ySize);

  this.cells = createCells.call(this);
  //console.log(this.cells);
}

// function to move grid simulation forward. Defaults to 1 tick forward but can do a different number if needed
// probably won't be deterministic so _be_ careful.
Grid.prototype.tick = (num = 1) => {};




Grid.prototype.at = function(x, y, direction = "none") {
  if (x < 0 || x > this.xSize - 1) {
    throw new Error("x out of bounds");
  }

  if (y < 0 || y > this.ySize - 1) {
    throw new Error("y out of bounds");
  }
  
  let rtn = this.cells[x][y];

  if (rtn == null) {
    this.cells[x][y] = new Cell(x, y, this);
    rtn = this.cells[x][y];
  }

  return direction === "none" ? rtn : rtn.direction;
};

const createCells = function() {
  let cells = new Array(this.xSize);
  //console.log(this.xSize,this.ySize);
  for (let x = 0; x < this.xSize; x++) {
    cells[x] = new Array(this.ySize);
    for (let y = 0; y < this.ySize; y++) {
      //console.log(x,y,cells[x][y]);
      //console.log(x,y);
      cells[x][y] = new Cell(x, y, this);
    }
  }
  // console.log(cells);
  return cells;
};

module.exports = Grid;
