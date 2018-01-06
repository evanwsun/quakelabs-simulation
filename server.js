const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());

const port = 80;
let grids = {};

const addGrid = (id,grid) =>{
    grids[id] = grid;
}

app.get("/cells/population", (req, res) => {
    let grid = grids[req.query.id];

    if(grid != null){
        res.type('json')
        res.status(200).send(grid.getWrappedCells());
    }
    else{
        res.status(404).send('Grid does not exist');
    }
    
});

app.listen(port, () => {
  console.log("App listening on port " + port);
});

module.exports = addGrid;