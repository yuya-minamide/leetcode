/**
 * URL of this problem
 * https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/
 */

/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function(s) {
    let result = [];

    for (let i = s.charCodeAt(0); i <= s.charCodeAt(3); i++) {
        for (let j = s[1]; j <= s[4]; j++) {
        result.push(String.fromCharCode(i) + j);
        }
    }

    return result;
};