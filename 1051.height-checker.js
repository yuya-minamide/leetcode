/**
 * URL of this problem
 * https://leetcode.com/problems/height-checker/
 */

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    const correctAlignment = [...heights].sort((a,b) => a - b);
    let counter = 0;
    
    for (let i = 0; i < heights.length; i++) {
        if(heights[i] !== correctAlignment[i]) counter++;
    }
    
    return counter;
};