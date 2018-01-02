//@ts-check
require("dotenv").load();

const twitterService = require("./twitter.js");
const Grid = require('./grid.js');
const Cell = require('./cell.js');






const grid = new Grid(7,4);

console.log(grid.at(2,3));








