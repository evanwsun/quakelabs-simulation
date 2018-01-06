module.exports = grid => {
  let localGrid = Object.assign({}, grid);
  delete localGrid._cells;

  return localGrid;
};