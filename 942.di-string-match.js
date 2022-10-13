/**
 * URL of this problem
 * https://leetcode.com/problems/di-string-match/
 */

/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    
    let result = [];
    let minimumNumber = 0;
    let maximumNumber = s.length;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "I") {
            result.push(minimumNumber);
            minimumNumber++
        } else if (s[i] == "D") {
            result.push(maximumNumber);
            maximumNumber--
        }
    }
    result.push(minimumNumber);
    return result;
};