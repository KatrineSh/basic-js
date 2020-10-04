const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let result = [];
  if (Array.isArray(members)) {    
      for (let item of members) {
      if (typeof(item) === 'string' && item !== '' && item !== null) {
      const arrItem = item.trim().toUpperCase();
      result.push(arrItem[0]);
  };
      };} else { return false; }
      return result.sort().join('');
      };
