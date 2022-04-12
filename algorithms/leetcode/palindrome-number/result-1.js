/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const actual = String(x);
    const reversed = actual.split('').reverse().join('');
    return reversed === actual;
};
