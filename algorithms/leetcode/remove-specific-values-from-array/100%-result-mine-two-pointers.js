/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let result = nums.length;
    let latest = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[latest] = nums[i]
            latest++;
        } else {
            result--;
        }
    }
    return result;
};