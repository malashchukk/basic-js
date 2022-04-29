const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(array) {
  let countOfCats = 0;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  for (let i of array){
    for (let u of i){
      if (u == '^^'){
        countOfCats++;
      } 
    }

  }

  return countOfCats;
}

module.exports = {
  countCats
};
