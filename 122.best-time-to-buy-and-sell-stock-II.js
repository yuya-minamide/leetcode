/**
 * URL of this problem
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	let profit = 0;

	for (let i = 0; i < prices.length - 1; i++) {
		let j = i + 1;
		if (prices[j] > prices[i]) {
			profit = profit + prices[j] - prices[i];
		}
	}

	return profit;
};
