/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let answer = 0;
    const inputLength = strs[0].length;
    // read it as a matrix instead line array
    // e.g. 
    // [ 
    //   'cba'
    //   'daf'
    //   'ghi'
    //         ]
    for (let column = 0; column < inputLength; column++) {
        for (let row = 1; row < strs.length; row++) {
            if (strs[row].charAt(column) < strs[row - 1].charAt(column)) {
                answer++;
                break;
            }
        }
    }
    return answer;
};