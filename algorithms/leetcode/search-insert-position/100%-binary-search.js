/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let highIndex = nums.length - 1;
    let lowIndex = 0;
  
    while (lowIndex <= highIndex) {
        let mid = Math.floor((highIndex + lowIndex)/2);
        if (nums[mid] === target) return mid;
        if (nums[mid] > target) {
            highIndex = mid - 1;
        } else {
             lowIndex = mid + 1;
        }
    }
  
    return lowIndex;
  };