/**
 * URL of this problem
 * https://leetcode.com/problems/single-number/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    const sortNums = nums.sort();
    
    for (let i = 0; i < sortNums.length; i += 2) {
        if (sortNums[i] !== sortNums[i + 1]) return sortNums[i];
    }
};