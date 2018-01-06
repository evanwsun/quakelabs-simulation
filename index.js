//@ts-check
require("dotenv").load();
const config = require("./config.js");
const Promise = require("bluebird");

const twitterService = require("./twitter.js");
const Grid = require("./grid.js");
const Cell = require("./cell.js");
const server = require("./server.js");

const grid = config.setup().then(grid => {
  console.log(grid.at(2, 3).navigate("N"));
    grid.tick();
    grid.tick();
    grid.tick();
    grid.tick();
    grid.tick();
  server('one',grid);
});
