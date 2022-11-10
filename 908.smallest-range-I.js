/**
 * URL of this problem
 * https://leetcode.com/problems/smallest-range-i/
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
    let lergeNumber = Math.max(...nums);
    let smallNumber = Math.min(...nums);
    
    if (lergeNumber === smallNumber) {
        return 0;
    } else if (k === 0) {
        return lergeNumber - smallNumber;
    } else {
        if (k >= (lergeNumber - smallNumber) / 2) {
            return 0;
        } else {
            lergeNumber -= k;
            smallNumber += k;
            return lergeNumber - smallNumber;
        }
    }
};