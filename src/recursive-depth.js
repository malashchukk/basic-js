const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    throw new NotImplementedError('Not implemented');
  }
  //   let ans = 1;
  //   function result(arr){
  //       for (let i of arr){
  //          if (i instanceof Array){
  //              ans = ans+1;
  //              result(i);
  //          }
  //       }
  //       return(ans);
  //   }
  //   return result(arr);

    // remove line with error and write your code here


}

module.exports = {
  DepthCalculator
};
