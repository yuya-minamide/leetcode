/**
 * URL of this problem
 * https://leetcode.com/problems/mean-of-array-after-removing-some-elements/
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
    const sortedArr = arr.sort((a, b) => a - b);
    const deletedLength = sortedArr.length * 0.05;
    let sum = 0;
    
    for (let i = deletedLength; i < sortedArr.length - deletedLength; i++) {
        sum += arr[i];
    }
    
    return sum / (sortedArr.length - deletedLength * 2);
};