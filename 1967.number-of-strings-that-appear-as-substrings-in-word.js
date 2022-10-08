/**
 * URL of this problem
 * https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/
 */

/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
    
    let counter = 0;
    
    for (let i = 0; i < patterns.length; i++) {
        if(word.includes(patterns[i]) === true) {
            counter++;
        }
    }
    
    return counter;
};