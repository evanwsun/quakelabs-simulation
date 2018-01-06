

//@ts-check
require("dotenv").load();
const config = require("./config.js");
const Promise = require("bluebird");

const twitterService = require("./services/twitter.js");
const Grid = require("./services/grid.js");
const Cell = require("./services/cell.js");
const server = require("./services/server.js");

//const setInterval = require("timers").setInterval;

config.setup().then(grid => {
  //console.log(grid.at(2, 3).navigate("N"));

  server("one", grid);
});

config.setup().then(grid => {
  //console.log(grid.at(2, 3).navigate("N"));
  setInterval(() => {
    grid.tick();
  }, config.tick.realFrequency * 1000);
  server("two", grid);
});
