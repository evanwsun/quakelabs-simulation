
const assert =  require('chai').assert;
const importTest = (name, path) => {
  describe(name, function() {
    require(path);
  });
};

var common = require("./common");

describe("top", function() {
  /* beforeEach(function() {
    console.log("running something before each test");
  }); */
  importTest("Cell", "./cell.js");
  //importTest("b", "./b/b");
 /* after(function() {
    console.log("after all tests");
  }); */
});
