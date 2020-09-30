const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
      let t = 0;
      let k = 0.693 / HALF_LIFE_PERIOD;
      let valid;
      if (typeof (sampleActivity) === 'number') {
          t = Math.log(MODERN_ACTIVITY / sampleActivity) / k;
          if (t > 0) { return Math.ceil(t); }
          else { return false };
      } else {
          return false;
      };
  };
