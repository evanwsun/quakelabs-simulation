//@ts-check

const config = require("../config.js");

const populationWrapper = cell => {
  let localCell = Object.assign({}, cell);
  localCell.population = roundValues(
    localCell.population,
    config.misc.serverValueRounding
  );
  delete localCell.grid;
  delete localCell.property;
  return localCell;
};

const propertyWrapper = cell => {
  let localCell = Object.assign({}, cell);
  localCell.property = roundValues(
    localCell.property,
    config.misc.serverValueRounding
  );
  delete localCell.grid;
  delete localCell.population;
  return localCell;
};

const bothWrapper = cell => {
  let localCell = Object.assign({}, cell);
  localCell.population = roundValues(
    localCell.population,
    config.misc.serverValueRounding
  );
  localCell.property = roundValues(
    localCell.property,
    config.misc.serverValueRounding
  );
  delete cell.grid;
  return localCell;
};

// rounds all values associated with a key in level 1 of an object
const roundValues = (obj, decimals) => {
  if (decimals === false) return obj;

  Object.keys(obj).forEach(key => {
    obj[key] = round(obj[key], decimals);
  });

  return obj;
};
const round = (value, decimals) => {
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
};

module.exports = {
  population: populationWrapper,
  property: propertyWrapper,
  both: bothWrapper
};
