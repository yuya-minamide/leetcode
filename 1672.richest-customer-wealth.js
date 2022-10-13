/**
 * URL of this problem
 * https://leetcode.com/problems/richest-customer-wealth/
 */

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let maxWealth = 0;
    for (let i = 0; i < accounts.length; i++) {
        let accountWealth = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            accountWealth += accounts[i][j];
        }
    if (accountWealth > maxWealth) {
        maxWealth = accountWealth
    }   
    }
    return maxWealth;
};