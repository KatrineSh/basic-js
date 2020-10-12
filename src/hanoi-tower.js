const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber,turnsSpeed) {
    var result = 0,
    secondsA = 0;
if (typeof(disksNumber) === 'number' && typeof(turnsSpeed) === 'number') {
    result= myCalculateHanoi(disksNumber);
    secondsA = Math.floor(myCalculateHanoi(disksNumber) * 3600 / turnsSpeed);
    return `{ turns: ${result}, seconds: ${secondsA} }`;
    } else { return false } };
    function myCalculateHanoi (disksNumber) {
        var turns = 0;
            if (disksNumber === 1) {
                return turns = 1; 
            } else {
            turns = 2 * myCalculateHanoi(disksNumber-1) + 1; 
    };
    return turns;
    }; 
