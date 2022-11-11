/**
 * URL of this problem
 * https://leetcode.com/problems/third-maximum-number/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    //Remove the same number from nums
    const uniqueNums = [...new Set(nums)];
    
    //If unique number length is < 3, result is going to be maximum number
    if (uniqueNums.length < 3) return Math.max(...uniqueNums);  
    
    //Sort in order of largest to smallest
    const sortedNums = uniqueNums.sort((a, b) => b - a);
    
    return uniqueNums[2];
};