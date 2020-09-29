const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let rezult = 0;
  for (let k=0; k<matrix.length; k++) {
      for (let i=0; i<matrix[k].length; i++) {
        if (matrix[k][i] === '^^') {
            rezult += 1;
        };
      };
  };
  return rezult;
  };
