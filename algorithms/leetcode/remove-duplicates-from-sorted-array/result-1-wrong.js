var removeDuplicates = function(nums) {
    let length = 1;
    let latest;
    for(let i = 0; i < nums.length - 1; i++) {
        if(nums[i] === latest) {
            latest = nums[i];
            const temp = nums[(nums.length+1) - length];
            nums[(nums.length+1) - length] = nums[i];
            nums[i] = temp;
        }else {
            latest = nums[i];
            length++;
        }
    }
    return length;
};
