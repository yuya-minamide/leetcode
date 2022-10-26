/**
 * URL of this problem
 * https://leetcode.com/problems/count-the-number-of-consistent-strings/
 */

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    const allowedSet = new Set(allowed);
    
    //Number of consistent strings in the array
    let result =　words.length;
    
    words.forEach((word) => {
        for (let i = 0; i < word.length; i++) {
            if (!allowedSet.has(word[i])) {
                result--;
                break;
            } 
        }
    })
    
    return result;
};