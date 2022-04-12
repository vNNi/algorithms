var removeDuplicates = function(nums) {
    let k = 1;
    for(let i = 0; i<nums.length-1; i++){
        if(nums[i] !== nums[i+1]){
            nums[k] = nums[i+1];
            k++;
        }
    }
    return k
};
