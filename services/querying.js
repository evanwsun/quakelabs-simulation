// this module is kinda weird - I wrote it to make it easier for me to query parts of the grid.

// first and second point are in form of {x: xValue, y: yValue}
const rectangularQuery = (grid, firstPoint, secondPoint) => {
  let rtn = [];
  if (firstPoint[0] === secondPoint[0] || firstPoint[1] === secondPoint[1])
    return rtn; // it's a fucking line

  let isFirstPointLeftmost = firstPoint[0] < secondPoint[0];
  let isFirstPointLowest = firstPoint[1] < secondPoint[1];
  console.log(isFirstPointLeftmost, isFirstPointLowest);
  if (isFirstPointLeftmost) {
    for (let x = firstPoint[0]; x < secondPoint[0] + 1; x++) {
      if (isFirstPointLowest) {
        for (let y = firstPoint[1]; y < secondPoint[1] + 1; y++) {
          rtn.push(grid.at(x, y));
        }
      } else {
        for (let y = secondPoint[1]; y < firstPoint[1] + 1; y++) {
          rtn.push(grid.at(x, y));
        }
      }
    }
  } else {
    for (let x = secondPoint[0]; x < firstPoint[0] + 1; x++) {
      if (isFirstPointLowest) {
        for (let y = firstPoint[1]; y < secondPoint[1] + 1; y++) {
          rtn.push(grid.at(x, y));
        }
      } else {
        for (let y = secondPoint[1]; y < firstPoint[1] + 1; y++) {
          rtn.push(grid.at(x, y));
        }
      }
    }
  }

  return rtn;
};

module.exports = { rectangular: rectangularQuery };
