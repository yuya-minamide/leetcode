/**
 * URL of this problem
 * https://leetcode.com/problems/two-city-scheduling/
 */

/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
	const SortedCosts = costs.sort((a, b) => a[0] - a[1] - (b[0] - b[1]));
	let result = 0;

	for (let i = 0; i < SortedCosts.length / 2; i++) {
		result += SortedCosts[i][0] + SortedCosts[i + SortedCosts.length / 2][1];
	}

	return result;
};
