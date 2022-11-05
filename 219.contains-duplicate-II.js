/**
 * URL of this problem
 * https://leetcode.com/problems/contains-duplicate-ii/
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const arr = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (arr.includes(nums[i])) return true;
        arr.push(nums[i]);
        if (arr.length > k) arr.splice(0, 1);
    }

    return false;
};