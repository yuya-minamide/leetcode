/**
 * URL of this problem
 * https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    const sArr = s.split(" ");
    const numsArr = [];
    
    //Extracting numbers from sArr
    for (let i = 0; i < sArr.length; i++) {
        if (sArr[i] == Number(sArr[i])) numsArr.push(Number(sArr[i]));
    }
    
    //Remove same number from numsArr
    const uniqueNumsArr  = [...new Set(numsArr)];
    
    //Sort in increased order
    const sortedNumber = numsArr.sort((a, b) => a - b);
    
    return uniqueNumsArr.toString() === sortedNumber.toString();
};