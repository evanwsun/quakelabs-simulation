//@ts-check

function Cell (x, y, grid,options={}) {
  this.x = x;
  this.y = y;
  this.grid = grid; // you are absolutely FORBIDDEN from altering this. http://jasonjl.me/blog/2014/10/15/javascript/

  this.poi = {};
    /*
  this.prototype.north = navigate("n");
  this.east = navigate("e");
  this.south = navigate("s");
  this.west = navigate("w");

  this.northeast = navigate("ne");
  this.southeast = navigate("se");
  this.southwest = navigate("sw");
  this.northwest = navigate("nw");

  */
  this.population = options.population;


};

const navigate = where => {
  let options = {
    n: [0, 1],
    e: [1, 0],
    s: [0, -1],
    w: [-1, 0],
    ne: [1, 1],
    se: [1, -1],
    sw: [-1, -1],
    nw: [-1, 1],
    none: [0,0]
  };

  if (Object.keys(options).includes(where) === false)
    throw new Error("Invalid location passed to navigate funciton");

  let target = [this.x + options[where][0], this.y + options[where][1]];
  if (target[0] < 0 || target[1] < 0) {
    throw new Error("Negative grid location not permitted.");
  }

  if (target[0] > this.grid.xSize - 1 || target[1] > this.grid.ySize - 1) {
    throw new Error("Location out of grid bounds in positive direction.");
  }

  return this.grid.at(target[0], target[1]);
};

const changePopulation = (newPopulation) =>{
    this.population = newPopulation;
}


module.exports = Cell;
