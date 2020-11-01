const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw new Error();
    let newArr = arr.slice();

    for (let i=0; i<newArr.length; i++) {
        if ('--discard-prev' === newArr[i]) 
        {
            if  (newArr[i - 1] !== undefined) {
                let myVar = newArr[i - 1];
                newArr.splice(i , 2);
            } else { newArr.splice(i , 1);}}

           else if  ('--discard-next' === newArr[i]) 
           {
            if  (newArr[i + 1] !== undefined) {
                let myVar = newArr[i + 1];
                newArr.splice(i , 2);
            } else { newArr.splice(i , 1);}
            }
           else if ('--double-next' === newArr[i] )
            {
                if  (newArr[i + 1] !== undefined) {
                    let myVar = newArr[i + 1];
                    newArr.splice(i , 1, myVar);
                } else { newArr.splice(i , 1);}
            }
           else if ('--double-prev' === newArr[i]) 
           {
               if (newArr[i - 1] !== undefined) {
                let myVar1 = newArr[i - 1];
                newArr.splice(i , 1, myVar1);}
               else { newArr.splice(i , 1);}
               
           }
        }
    return newArr;
}
