/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let dp = [];
    if(nums.length < 3) {
       return Math.max(nums[0], nums[1] === undefined ? 0 : nums[1]);
    }
    dp[0] = nums[0]
    dp[1] = nums[1]
    dp[2] = dp[0] + nums[2]
    
    for(let i=3; i<nums.length; i++) {
    dp[i] = Math.max(dp[i-2], dp[i-3])+nums[i]

    }
    return Math.max(dp[nums.length-1], dp[nums.length-2])
};