/**
 * URL of this problem
 * https://leetcode.com/problems/squares-of-a-sorted-array/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    
    let result = [];
    
    //Calculate area
    for (let i = 0; i < nums.length; i++) {
        const area = Math.abs(nums[i] * nums[i]);
        result.push(area);
    }
    
    return result.sort((a, b) => a - b);
};