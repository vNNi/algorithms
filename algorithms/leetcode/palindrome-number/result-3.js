/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const actual = String(x);
    let reversed = "";
    for(let i=actual.length-1; i>=0; i--) {
        reversed = `${reversed}${actual[i]}`;
    }
    return reversed === actual;
};
