/**
 * URL of this problem
 * https://leetcode.com/problems/find-first-palindromic-string-in-the-array/
 */

/**
 * @param {string[]} words
 * @return {string}
 */

//Rotate words of Array
var firstPalindrome = function(words) {   
    
    for (let i = 0; i < words.length; i ++) {
        const word = words[i]
        if (judgePalindrome(word)) {
            return word;
        }
    } 
    
    return "";
};


//Judge current word is palindrome or not
const judgePalindrome = function(word) {
    
    for (let i = 0; i < word.length / 2 + 1; i ++) {
        if (word[i] !== word[word.length - 1 - i]) {
            return false;
        }
    }
    
    return true;     
};