/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let prefix = strs[0];
    let result = '';
    strs.forEach((string) => {
        string.split('').forEach((letter) => {
            if(result.split('').find((pl) => pl === letter)) {
                result+=letter;
            }else {
                result = string;
            }
            prefix=string;
        });
        
    });
    return result;
};