/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let lower = 0
    let high = x;
    while(lower <= high) {
         let mid = Math.floor((lower + high) / 2);
         if(mid * mid > x) high = mid - 1;
         else lower = mid + 1;
    }
    return high;
};