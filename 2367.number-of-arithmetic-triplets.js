/**
 * URL of this problem
 * https://leetcode.com/problems/number-of-arithmetic-triplets/submissions/
 */

/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    let numberOfCounte = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums.includes(nums[i] + diff) && nums.includes(nums[i] + (diff * 2))) {
            numberOfCounte++; 
        }
    }
    
    return numberOfCounte;
};