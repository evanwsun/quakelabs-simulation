const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const port = 80;
let grids = {};

const addGrid = (id, grid) => {
  grids[id] = grid;
};

app.get("/cells/population", (req, res) => {
  console.log(
    req.route.path +
      " pinged with " +
      JSON.stringify(req.query) +
      " query string"
  );
  let grid = grids[req.query.id];

  if (grid != null) {
    res.type("json");
    res.status(200).send(grid.getWrappedCells("population"));
  } else {
    res.status(404).send("Grid does not exist");
  }
});

app.get("/cells/property", (req, res) => {
  console.log(
    req.route.path +
      " pinged with " +
      JSON.stringify(req.query) +
      " query string"
  );
  let grid = grids[req.query.id];

  if (grid != null) {
    res.type("json");
    res.status(200).send(grid.getWrappedCells("property"));
  } else {
    res.status(404).send("Grid does not exist");
  }
});

app.get("/cells", (req, res) => {
  console.log(
    req.route.path +
      " pinged with " +
      JSON.stringify(req.query) +
      " query string"
  );
  let grid = grids[req.query.id];

  if (grid != null) {
    res.type("json");
    res.status(200).send(grid.getWrappedCells());
  } else {
    res.status(404).send("Grid does not exist");
  }
});

app.get("/grid", (req, res) => {
  console.log(
    req.route.path +
      " pinged with " +
      JSON.stringify(req.query) +
      " query string"
  );
  let grid = grids[req.query.id];

  if (grid != null) {
    res.type("json");
    res.status(200).send(grid.getSelfWrapped());
  } else {
    res.status(404).send("Grid does not exist");
  }
});

app.listen(port, () => {
  console.log("App listening on port " + port);
});

module.exports = addGrid;
