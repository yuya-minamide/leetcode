/**
 * URL of this problem
 * https://leetcode.com/problems/plus-one/
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const redefinedDigits = [...digits];
    
    for(let i = digits.length - 1; i >= 0; i--) {
        if (redefinedDigits[i] < 9) {
            redefinedDigits[i]++;
            return redefinedDigits;
        } else {
            redefinedDigits[i] = 0;
        }
    }   
    redefinedDigits.unshift(1);
    
    return redefinedDigits; 
};