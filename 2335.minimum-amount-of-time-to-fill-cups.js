/**
 * URL of this problem
 * https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/
 */

/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function(amount) {
    
    //Sort numbers from highest to lowest
    let sortedNumber = amount.sort((a, b) => b - a);
    let timeOfFilledUp = 0;
    
    while (sortedNumber[0] !== 0) {
        timeOfFilledUp++
        sortedNumber[0]--;
        sortedNumber[1]--;
        //Sort numbers from highest to lowest　again
        sortedNumber.sort((a, b) => b - a);
    }

    return timeOfFilledUp;
};