/**
 * URL of this problem
 * https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/
 */

/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
    
    let counterL = 0
    for (let i = 0; i < colors.length; i++) {
        for (let j = colors.length - 1; j > 0; j--) {
            if (colors[i] != colors[j]) counterL = Math.abs(i - j);
        }
    }
    
    let counterR = 0
    for (let j = colors.length - 1; j >= 0; j--) {
        for (let i = 0; i < colors.length; i++) {
            if (colors[i] != colors[j]) counterR = Math.abs(i - j);
        }
    }
    
    return Math.max(counterL, counterR);
};