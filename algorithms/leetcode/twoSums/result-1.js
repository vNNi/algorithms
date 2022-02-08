var twoSum = function(nums, target) {
    const map = {}
    for (let i = 0; i < nums.length; ++i) {
        console.log('map', map)
        if (map[nums[i]] !== undefined) return [map[nums[i]], i]
        console.log('target - num[i]', target, nums[i]);
        map[target - nums[i]] = i
    }
};
