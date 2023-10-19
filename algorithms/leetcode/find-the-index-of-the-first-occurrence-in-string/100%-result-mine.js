/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let match = [];
    let words = haystack.split('');
    let exptWords = needle.split('');
    let pointer = 0;
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < exptWords.length; j++) {
            if (words[j+pointer] === exptWords[j]) {
                match.push(i);
                if (match.length === exptWords.length) break;
            } else {
                match = [];
                break;
            }
        }
        pointer++;
        if (match.length === exptWords.length) break;
    }
    if (match.length === exptWords.length) {
        return match[0]
    }
    return -1
};