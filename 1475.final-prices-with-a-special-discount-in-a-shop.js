/**
 * URL of this problem
 * https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/
 */

/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {   
    let finalPrices = [];
    
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] <= prices[i]) {
                finalPrices.push(prices[i] - prices[j]) 
                break;
            }           
        }        
        if (finalPrices.length === i)  finalPrices.push(prices[i]); 
    }
    
    return finalPrices;
};