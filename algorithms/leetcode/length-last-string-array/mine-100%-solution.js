/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const words = s.trim().replace(/\s+/g, ' ').split(' ');
    if (words.length === 0) return 0;
    return words[words.length-1].length;
};