//@ts-check
// This config is not for secrets. 
// It's to set up the simulation how you would like to.
// I haven't quite decided how to handle this vis-à-vis .gitignore
let exp = module.exports;


exp.population = 1000;

exp.distribution = function(grid){
    // this function will evenly distribute the populace to the best of its ability.
    // the cells with the lowest x scores and then (if x is equal) y scores will tend to have more population because division isn't perfect
    let totalCells = grid.xSize * grid.ySize;
    let minCellPopulation = Math.floor(exp.population / totalCells);
    let remainder = exp.population - minCellPopulation;

    for (let x = 0; x < grid.xSize; x++) {
       
        for (let y = 0; y < grid.ySize; y++) {
            let populationToAddCurrent = minCellPopulation + (remainder>0 ? 1: 0) ;
            grid.cells[x][y].changePopulation(populationToAddCurrent);
            remainder --;
        }
      }


}