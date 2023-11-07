/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (let i = digits.length -1; i >=0; i--) {
      if(digits[i] === 9 ) {
        digits[i] = 0;
        if (i - 1 === -1) { // need to include more one in right side...
          return [1, ...digits];
        }
      } else {
        digits[i] = digits[i] + 1;
        break;
      }
    }
    return digits;
  };