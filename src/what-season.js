const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    let dateK = new Date(date),
    result = '';
    if (typeof dateK === 'undefined') return 'Unable to determine the time of year!';
    else if (isNaN(dateK.getTime())) throw new Error ('THROWN');
    else {
    switch (dateK.getMonth()){
    case 11:  case 0:  case 1:
      return 'winter';
    case 2: case 3: case 4:
      return 'spring';
    case 5: case 6: case 7:
      return 'summer';
    case 8: case 9: case 10:
      return 'autumn (fall)';
    default: 
      return false;
    };
    };
};
