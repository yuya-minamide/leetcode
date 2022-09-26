/**
 * URL of this problem
 * https://leetcode.com/problems/shuffle-string/
 */

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let correct = "";
        for (let i = 0; i < s.length; i++) {
            const index = indices.indexOf(i);
            correct += s.charAt(index); 
        }
        return correct;  
    };
    