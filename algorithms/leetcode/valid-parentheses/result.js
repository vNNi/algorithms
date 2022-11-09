/**
 * @param {string} s
 * @return {boolean}
 */

 const opposites = (first, second) => {
    if(first == '(' && second == ')') return true;
    if(first == '{' && second == '}') return true;
    if(first == '[' && second == ']') return true;
    return false;
};

var isValid = function(s) {
    const items = s.split("");
    let result = false;
    for (let i = 0; i+1 < items.length; i++ ) {
        result = opposites(items[i], items[i+1])
    }
    return result;
};