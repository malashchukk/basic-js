const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {

  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (arr instanceof Array){
  
      let currentElement;
      let indexOfElement;
      let indexOfCommand;
      let workArr = arr.slice();
      for (let i = 0; i<arr.length; i++){
    
        if (arr[i] == '--discard-next'){
        //   workArr.splice(i+1, 1);
                currentElement = arr[i+1];
                currentCommand = arr[i];
                // console.log(currentElement);
                indexOfElement = workArr.indexOf(currentElement);
                if (indexOfElement >= 0){
                    workArr.splice(indexOfElement, 1)
                }
                indexOfCommand = workArr.indexOf(currentCommand);
                workArr.splice(indexOfCommand, 1)
            
        }
            if (arr[i] == '--discard-prev'){
        //   workArr.splice(i+1, 1);
                currentElement = arr[i-1];
                currentCommand = arr[i];
                // console.log(currentElement);
                indexOfElement = workArr.indexOf(currentElement);
                if (indexOfElement >= 0){
                    workArr.splice(indexOfElement, 1)
                }
                indexOfCommand = workArr.indexOf(currentCommand);
                workArr.splice(indexOfCommand, 1)
            
        }
            if (arr[i] == '--double-prev'){
        //   workArr.splice(i+1, 1);
                currentElement = arr[i-1];
                currentCommand = arr[i];
                // console.log(currentElement);
                indexOfElement = workArr.indexOf(currentElement);
                indexOfCommand = workArr.indexOf(currentCommand);
                if (indexOfElement >= 0){
                    workArr.splice(indexOfCommand, 1, currentElement)
                } else {
                    workArr.splice(indexOfCommand, 1)
                }
                
        }
                if (arr[i] == '--double-next'){
        //   workArr.splice(i+1, 1);
                currentElement = arr[i+1];
                currentCommand = arr[i];
                // console.log(currentElement);
                indexOfElement = workArr.indexOf(currentElement);
                indexOfCommand = workArr.indexOf(currentCommand);
                if (indexOfElement >= 0){
                    workArr.splice(indexOfCommand, 1, currentElement)
                } else {
                    workArr.splice(indexOfCommand, 1)
                }
                
        }

  }
    // if (arr[i] == '--discard-prev'){
    //     workArr.splice(i-1, 1);
    // }
    
  return workArr;
  
  }else {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
}

module.exports = {
  transform
};
