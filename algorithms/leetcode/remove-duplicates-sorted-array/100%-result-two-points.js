/**
 * 
 * Let consider first item is always distinct so we define j = 1, anything behind j will be the list of distinct 
 * items. We iterate each item in the original list whenever we find it different with recent item in our distinct 
 * list we move j pointer forward and j will be length of our distinct items when we already went through all the original list.
 */
const removeDuplicates = (nums) => {
    let k = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};