const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
let rezult = 0;
    for (i=0; i<matrix.length; i++) {
      if (matrix[i] === '^' && matrix[i + 1] === '^') {
          rezult = 1 + rezult;
      };
    };
        return rezult;
};
