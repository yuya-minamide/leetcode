/**
 * URL of this problem
 * https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
 */

/**
 * @param {number} num
 * @return {number}
 */

var numberOfSteps = function(num) {
    
    let counter = 0;
    
    while(num !== 0) {
        if (num % 2 === 1) {
            num = num - 1;
            counter++;
        } else if (num % 2 === 0) {
            num = num / 2;
            counter++;
        }
    }
    
    return counter;
};