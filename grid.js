// @ts-check
const Promise = require("bluebird");
const Cell = require("./cell.js");
const CellWrapper = require('./wrappers/cell.js');
const config = require("./config.js");

// a grid represents the city - a combination of cells

function Grid(xSize, ySize) {
  this.xSize = xSize; // will always
  this.ySize = ySize;
  // console.log(this.xSize,this.ySize);

  this._cells = createCells.call(this); // call() ensures that it has the right "this"
  //console.log(this.cells);
}

// function to move grid simulation forward. Defaults to 1 tick forward but can do a different number if needed
// probably won't be deterministic so _be_ careful.
Grid.prototype.tick = function(num = 1) {
  //console.log(this);
  this._cells.forEach(row => {
    row.forEach(cell => {
      cell.tick();
    });
  });
};

Grid.prototype.quake = function(
  where,
  magnitude,
  baseDamage = config.quake.baseDamage,
  exponentScaler = config.quake.exponentScaler
) {
  Object.keys(where).forEach(rating => {
    where[rating].foreach(location => {
      this.at(location[0], location[1]).quake(
        magnitude,
        baseDamage,
        exponentScaler,
        rating
      );
    });
  });
};

// you could directly access with Grid._cells but this has error protection
Grid.prototype.at = function(x, y, direction = "none") {
  if (x < 0 || x > this.xSize - 1) {
    throw new Error("x out of bounds");
  }

  if (y < 0 || y > this.ySize - 1) {
    throw new Error("y out of bounds");
  }

  let rtn = this._cells[x][y];

  if (rtn == null) {
    this._cells[x][y] = new Cell(x, y, this);
    rtn = this._cells[x][y];
  }

  return direction === "none" ? rtn : rtn.direction;
};

// returns cells without grid reference
Grid.prototype.getWrappedCells = function(){
  let cells = new Array(this.xSize);
  //console.log(this.xSize,this.ySize);
  for (let x = 0; x < this.xSize; x++) {
    cells[x] = new Array(this.ySize);
    for (let y = 0; y < this.ySize; y++) {
      //console.log(x,y,cells[x][y]);
      //console.log(x,y);
      cells[x][y] = CellWrapper(this.at(x,y));
    }
  }
  // console.log(cells);
  return cells;
}

// makes the cells
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
