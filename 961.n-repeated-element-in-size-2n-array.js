/**
 * URL of this problem
 * https://leetcode.com/problems/n-repeated-element-in-size-2n-array/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) return nums[i];
        }
    }
};