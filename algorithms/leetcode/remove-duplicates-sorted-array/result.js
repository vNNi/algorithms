/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const newNums = [...nums];
    let num = nums.length;
    let latestDiff = nums[nums.length - 1];
    newNums.forEach((_numA, j) => {
      const jj = j + 1;
      const i = nums.length - jj;
      if (newNums[i] === newNums[i-1] && nums[i] !== latestDiff) {
          nums[i+1] = '_';
          nums[i] = latestDiff;
          num = num - 1;
        } else {
          latestDiff = newNums[i];
        }
    });
    return num;
};