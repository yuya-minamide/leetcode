/**
 * URL of this problem
 * https://leetcode.com/problems/maximum-ice-cream-bars/
 */

/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
	const SortedCosts = costs.sort((a, b) => a - b);

	if (costs[0] > coins) return 0;

	let counter = 0;
	for (let i = 0; i < costs.length; i++) {
		if (SortedCosts[i] <= coins) {
			counter++;
			coins -= SortedCosts[i];
		} else {
			return counter;
		}
	}

	return counter;
};
