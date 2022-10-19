/**
 * URL of this problem
 * https://leetcode.com/problems/sort-array-by-parity-ii/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    
    const evenNumbers = nums.filter(a => a % 2 === 0);
    const oddNumbers = nums.filter(a => a % 2 === 1);
    
    const result = [];
    
    for (let i = 0; i < evenNumbers.length; i ++) {
        result.push(evenNumbers[i],oddNumbers[i]);
    }
    
    return result;
};