/**
 * URL of this problem
 * https://leetcode.com/problems/count-of-matches-in-tournament/
 */

/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    
    let totalMatch = 0;
    
    while (n > 1) {
        if (n % 2 !== 0) {
            totalMatch = totalMatch + (n - 1) / 2;
            n = (n -1) / 2 + 1;
        } else if (n % 2 === 0) {
            totalMatch = totalMatch + n / 2;
            n = n / 2;
        }
    }
    
    return totalMatch;
};