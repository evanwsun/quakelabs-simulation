//@ts-check
require("dotenv").load();
const config = require('./config.js');
const twitterService = require("./twitter.js");
const Grid = require('./grid.js');
const Cell = require('./cell.js');







const grid = new Grid(7,4);
config.distribution(grid);

console.log(grid.cells[2][3]);








