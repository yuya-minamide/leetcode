/**
 * URL of this problem
 * https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function(nums) {
    const sortedNums = [...nums].sort((a, b) => a - b);
    let counter = 0;
    
    for (let i = 0; i < sortedNums.length; i++) {
        if (sortedNums[0] !== sortedNums[i]) {
            for (let j = i + 1; j < sortedNums.length; j++) {
                if (sortedNums[j] > sortedNums[i]) {
                    counter++;
                    break;
                }
            }
        }
    }
    
    return counter;
};