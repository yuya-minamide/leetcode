/**
 * URL of this problem
 * https://leetcode.com/problems/sort-even-and-odd-indices-independently/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function(nums) {
    const evenIndexNums = [];
    const oddIndexNums = [];
    const result = [];
    
    //Separate odd and even index numbers
    for (let i = 0; i < nums.length; i++) {
        i % 2 === 0 ? evenIndexNums.push(nums[i]) : oddIndexNums.push(nums[i]);
    }
    
    //Sort even arrays in ascending order
    const sortedEvenNums = evenIndexNums.sort((a, b) => a - b);
    //Sort odd arrays in descending order
    const sortedOddNums = oddIndexNums.sort((a, b) => b - a);
    
    for (let i = 0; i < evenIndexNums.length; i++) {
        result.push(sortedEvenNums[i], sortedOddNums[i] || 0);
    }
    
    //Remove the last digit if the length of nums is odd
    if (nums.length % 2 === 1) {
        result.pop();
    }
    
    return result;
};