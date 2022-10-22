/**
 * URL of this problem
 * https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/
 */

/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(cost) {
    
    const sortCost = cost.sort((a, b) => b - a);
    
    let totalCost = 0;
    
    for (let i = 0; i < cost.length; i += 3) {
        totalCost += sortCost[i] + (sortCost[i + 1] || 0);
    }
    
    return totalCost;
};