const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw new Error();
    let newArr = arr.slice();

    for (let i=0; i<newArr.length; i++) {
        if ('--discard-prev' === newArr[i]) {
           newArr.splice( i - 1 , 2);}
           else if  ('--discard-next' === newArr[i]) {
               newArr.splice(i, 2); }
           else if ('--double-next' === newArr[i]) {
               newArr.splice(i , 1, i + 1);
           }
           else if ('--double-prev' === newArr[i]) {
               newArr.splice(i , 1, i - 1 );
           }
    } 
    return newArr;
}
