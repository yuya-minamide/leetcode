/**
 * URL of this problem
 * https://leetcode.com/problems/reverse-prefix-of-word/
 */

/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    const redefinedWord = word
    const placeOfChValue = redefinedWord.indexOf(ch);
    
    return redefinedWord.slice(0,placeOfChValue + 1).split("").reverse().join("") + redefinedWord.slice(placeOfChValue + 1);   
};