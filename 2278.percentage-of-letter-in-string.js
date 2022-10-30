/**
 * URL of this problem
 * https://leetcode.com/problems/percentage-of-letter-in-string/
 */

/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    //Picked up same alphabet from s
    const sameAlphabet = s.split("").filter(a => a === letter);
    
    return Math.floor(sameAlphabet.length / s.length * 100);
};