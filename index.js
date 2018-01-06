//@ts-check
require("dotenv").load();
const config = require("./config.js");
const Promise = require("bluebird");

const twitterService = require("./twitter.js");
const Grid = require("./grid.js");
const Cell = require("./cell.js");

const grid = config.setup().then(grid => {
 // grid.tick();
  console.log(grid.at(2, 3).navigate("N"));
});
