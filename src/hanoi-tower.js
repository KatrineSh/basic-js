const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber,turnsSpeed) {
    var result = 'turns: ';
if (isNaN(disksNumber) && isNaN(turnsSpeed)) {
    result+= myCalculateHanoi(disksNumber);
    return result;
    } else {false } };
    function myCalculateHanoi (disksNumber) {
        let turns = '',
        seconds = 0;
            if (disksNumber === 1) {
                return turns = 1; 
            } else {
            turns = 2 * myCalculateHanoi(disksNumber-1) + 1; 
    };
    return turns;
    }; 
    
    console.log(calculateHanoi(v,g));
