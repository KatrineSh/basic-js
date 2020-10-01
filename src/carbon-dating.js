const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    let t = 0;
    let k = 0.693 / HALF_LIFE_PERIOD;
    if ((typeof(sampleActivity) !== 'string') || (sampleActivity === undefined) || (sampleActivity === null) || (sampleActivity === ''))
    { return false } else {
        t = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / k;
        if (t > 0 && typeof(t) === 'number' && t !== NaN && t!== Infinity) { return Math.ceil(t);} else {return false};
    };
};
