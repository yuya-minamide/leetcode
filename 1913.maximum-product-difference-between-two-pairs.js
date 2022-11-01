/**
 * URL of this problem
 * https://leetcode.com/problems/maximum-product-difference-between-two-pairs/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    //create a pair of high and low numbers
    let highNums = nums.sort((a, b) => b - a).slice(0,2);
    let lowNums = nums.sort((a, b) => a - b).slice(0,2);
    
    return highNums[0] * highNums[1] - lowNums[0] * lowNums[1];
};