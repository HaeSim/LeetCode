/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let mySet = new Set();
    for(let i in nums) {
        if(mySet.has(nums[i])) {
            return true;
        }
        mySet.add(nums[i]);
    }
    return false;
};