/**
 * URL of this problem
 * https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/
 */

/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    const number = num.toString().split("").sort();
    return Math.floor(number[0] + number[2]) +  Math.floor(number[1] + number[3]);
};