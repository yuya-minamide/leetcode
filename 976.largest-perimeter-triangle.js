/**
 * URL of this problem
 * https://leetcode.com/problems/largest-perimeter-triangle/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    
    //Sort numbers from highest to lowest
    const sortedNumber = nums.sort((a, b) => b - a);
    let perimeter = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (sortedNumber[i] < (sortedNumber[i + 1] + sortedNumber[i + 2])) {
            perimeter = sortedNumber[i] + sortedNumber[i + 1] + sortedNumber[i + 2]
            break;
        }
    }
    
    return perimeter;
};