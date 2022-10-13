/**
 * URL of this problem
 * https://leetcode.com/problems/sort-array-by-parity/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    
    const evenNumbers = nums.filter((a) => a % 2 === 0);
    const oddNumbers = nums.filter((a) => a % 2 === 1);
    
    return evenNumbers.concat(oddNumbers);
};
