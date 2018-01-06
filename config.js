//@ts-check
// This config is not for secrets.
// It's to set up the simulation how you would like to.
// I haven't quite decided how to handle this vis-à-vis .gitignore
const Grid = require("./grid.js");
const rnorm = require("randgen").rnorm;
const Promise = require("bluebird");
let exp = module.exports;

exp.tick = {};

exp.tick.realFrequency = 15; // seconds
exp.tick.fakeFrequency = 3; // days

exp.dimensions = {
  x: 160,
  y: 100
};
exp.population = {};
exp.population.value = 782343;
exp.population.growthPerTickMean = 1.00216;
exp.population.growthPerTickVariance = 0.0009; // this might seem really low but you have to remember that this is going to be put to the power of 365/3

exp.population.distribution = function(grid) {
  // this function will evenly distribute the populace to the best of its ability.
  // the cells with the lowest x scores and then (if x is equal) y scores will tend to have more population because division isn't perfect
  let totalCells = grid.xSize * grid.ySize;
  let minCellPopulation = Math.floor(exp.population.value / totalCells);
  let remainder = exp.population - minCellPopulation;

  for (let x = 0; x < grid.xSize; x++) {
    for (let y = 0; y < grid.ySize; y++) {
      let populationToAddCurrent =
        minCellPopulation + (remainder-- > 0 ? 1 : 0);
      let toChange = grid.at(x, y);
      toChange.changePopulation(populationToAddCurrent);
      toChange.changePopulationGrowth(
        rnorm(
          exp.population.growthPerTickMean,
          exp.population.growthPerTickVariance
        )
      );
    }
  }
};

exp.property = {};

exp.property.value = exp.population.value * 4234; // 4234 is value/capita
exp.property.distribution = function(grid) {
  // this function will evenly distribute propery value
  let totalCells = grid.xSize * grid.ySize;
  let cellValue = exp.property.value / totalCells;

  for (let x = 0; x < grid.xSize; x++) {
    for (let y = 0; y < grid.ySize; y++) {
      grid.at(x, y).changePropertyOriginalValue(cellValue);
    }
  }
};

exp.quake = {};
exp.quake.baseDamage = 32.459;
exp.quake.exponentScaler = 0.0677;

exp.setup = function(grid) {
  return new Promise(resolve => {
    let rtn = grid || new Grid(exp.dimensions.x, exp.dimensions.y);
    exp.population.distribution(rtn);
    exp.property.distribution(rtn);

    resolve(rtn);
  });
};
