/**
 * URL of this problem
 * https://leetcode.com/problems/count-operations-to-obtain-zero/
 */

/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function(num1, num2) {
    let number1 = num1;
    let number2 = num2;
    let counter = 0;
    
    while (number1 > 0 && number2 > 0) {
        number1 >= number2 ? number1 -= number2 : number2 -= number1;
        counter++;
    }
    
    return counter;
};