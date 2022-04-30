const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
// let chainValues = [];
// let chainValues = [];
// let chainValues = [];
const chainMaker = {
  chainValues: [],
//   countOfElems = chainValues.length,
  getLength() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.chainValues.length;
  },
  addLink(value) {
    this.chainValues.push(`( ${value} )`);
    // console.log(this.chainValues);
    return this;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(position) {
      if (position % 1 === 0 && typeof position === 'number' && position > 0 && position < this.chainValues.length){
      let indexOfElem = position-1;
      this.chainValues.splice(indexOfElem, 1);
          return this
      } else {
        this.chainValues.length = 0;
          throw new Error('You can\'t remove incorrect link!');
      }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.chainValues.reverse();
    return this;

  },
  finishChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let FinishChain = this.chainValues.join('~~');
    this.chainValues.length = 0;
    return FinishChain;
  }
};

module.exports = {
  chainMaker
};
