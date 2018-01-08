module.exports = grid => {
  let localGrid = Object.assign({}, grid);
  delete localGrid._cells;
  localGrid.population = Math.round(grid.totalPopulation());
  return localGrid;
};