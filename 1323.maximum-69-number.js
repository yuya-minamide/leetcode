/**
 * URL of this problem
 * https://leetcode.com/problems/maximum-69-number/
 */

/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    
    let splitNumber = num.toString().split("");
    
    for (let i = 0; i < splitNumber.length; i++) {
        if (splitNumber[i] == "6") {
            splitNumber[i] = "9";
            break;
        }
    }
    return Number(splitNumber.join(""));
};