const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

 function getSeason(a) {

    let now = new Date();
    let winter = [11, 0, 1];
    let spring = [2, 3, 4];
    let summer = [5, 6, 7];
    let autumn = [8, 9, 10];
    if (  !isNaN(a) && String(a) != String(now) && Object.prototype.toString.call(a) === '[object Date]'){
        month = a.getMonth();
        if (winter.includes(month)){
          return 'winter';
        }
        if (spring.includes(month)){
          return 'spring';
        }
        if (summer.includes(month)){
          return 'summer';
        }
        if (autumn.includes(month)){
          return 'autumn';
        }
    
    } else if ( Boolean(a) === false){
      return 'Unable to determine the time of year!';

    // } else if (! a instanceof Date) {
    //   throw new Error("Invalid date!");
    
    } 
    else{
      throw new Error("Invalid date!");
    }
  
  } 


module.exports = {
  getSeason
};
