/**
 * URL of this problem
 * https://leetcode.com/problems/contains-duplicate/
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    //remove same numbers
    const sortedNums = [...new Set(nums)];
    
    return nums.length !== sortedNums.length  
};