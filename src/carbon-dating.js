const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 function dateSample(a) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (typeof a === 'string'){
    // if ((typeof Number(a) === 'number') && (Number(a) == 'NaN')){
    if ((typeof Number(a) === 'number') && (Number(a)>= 0) && (Number(a))<= 15) {
        if ( Boolean(Number((a)))) {
          let k = (0.693/HALF_LIFE_PERIOD);
          let first = Math.log(MODERN_ACTIVITY/a);
          let t = first/k;
          let ans = Math.ceil(t);
          return ans;
        } else {
            return false;
        }
    } else {
        return false;
    }
  } else {
    return false;
  }
}

module.exports = {
  dateSample
};
//  console.log( dateSample(3));