const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
    let optionsDefault = {
        repeatTimes: 1,
        separator: '+',
        addition: '',
        additionRepeatTimes: 1,
        additionSeparator: '|' 
    };
    
    options.repeatTimes = (options.repeatTimes === undefined) ? optionsDefault.repeatTimes : options.repeatTimes;
    options.separator = (options.separator === undefined) ? optionsDefault.separator : options.separator;
    options.addition = (options.addition === undefined) ? optionsDefault.addition : options.addition;
    options.additionRepeatTimes = (options.additionRepeatTimes === undefined) ? optionsDefault.additionRepeatTimes : options.additionRepeatTimes;
    options.additionSeparator = (options.additionSeparator === undefined) ? optionsDefault.additionSeparator : options.additionSeparator;
    
    str = String(str);
    options.addition = String(options.addition);
    

    let fullAddition = [];
    for (let i = 0; i<options.additionRepeatTimes; i++){
        fullAddition.push(options.addition);
    }
    fullAddition = fullAddition.join(options.additionSeparator)

    
    let fullStr = str+fullAddition;

    let ans = [];
    for (let i = 0; i<options.repeatTimes; i++){
        ans.push(fullStr);
    }
    ans = ans.join(options.separator);

  return ans;
}


module.exports = {
  repeater
};
