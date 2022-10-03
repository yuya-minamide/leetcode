/**
 * URL of this problem
 * https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    
    let increaseNumber = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= nums[i + 1]) {
            increaseNumber += (nums[i] + 1) - nums[i + 1];
            nums[i + 1] = nums[i] + 1;
        }
    }
    return increaseNumber;
};