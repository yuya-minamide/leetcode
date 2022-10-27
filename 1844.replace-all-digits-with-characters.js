/**
 * URL of this problem
 * https://leetcode.com/problems/replace-all-digits-with-characters/
 */

/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    const result = s.split("");
    
    for (let i = 0; i < s.length-1; i += 2) {
        result[i + 1] = String.fromCharCode(result[i].charCodeAt() + Number(result[i + 1]));
    }
    
    return result.join("");
};