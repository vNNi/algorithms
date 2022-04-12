/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const actual = String(x);
    const reversed = [];
    for(let i=actual.length-1; i>=0; i--) {
        reversed.push(actual[i]);
    }
    return reversed.join('') === actual;
};
