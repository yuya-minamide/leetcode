/**
 * URL of this problem
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	let minPrice = Infinity;
	let maxBenefit = 0;

	for (let i = 0; i < prices.length; i++) {
		minPrice = Math.min(minPrice, prices[i]);
		maxBenefit = Math.max(maxBenefit, prices[i] - minPrice);
	}

	return maxBenefit;
};
