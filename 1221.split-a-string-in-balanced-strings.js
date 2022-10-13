/**
 * URL of this problem
 * https://leetcode.com/problems/split-a-string-in-balanced-strings/
 */

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let matchingTimes = 0;
    let counterR = 0;
    let counterL = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "R") {
            counterR++;
        } else {
            counterL++;
        }
        if (counterR === counterL) {
            matchingTimes++;
        }
    }
    return matchingTimes;
};