//@ts-check

const config = require("../../config.js");
const roundValues = require("../rounding.js");
const async = require("async");

const populationWrapper = cell => {
  let localCell = Object.assign({}, cell);
  localCell.population = roundValues(localCell.population, "population");
  delete localCell.grid;
  delete localCell.property;
  return localCell;
};

const propertyWrapper = cell => {
  let localCell = Object.assign({}, cell);
  localCell.property = roundValues(localCell.property, "property");
  delete localCell.grid;
  delete localCell.population;
  return localCell;
};

const bothWrapper = cell => {
  let localCell = Object.assign({}, cell);
  async.parallel([
    function() {
      localCell.population = roundValues(localCell.population, "population");
    },
    function() {
      localCell.property = roundValues(localCell.property, "property");
    }
  ]);

  delete cell.grid;
  return localCell;
};

module.exports = {
  population: populationWrapper,
  property: propertyWrapper,
  both: bothWrapper
};
