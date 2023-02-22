/**
 * URL of this problem
 * https://leetcode.com/problems/maximum-number-of-coins-you-can-get/
 */

/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function (piles) {
	const SortedPiles = piles.sort((a, b) => a - b);
	let sum = 0;

	for (let i = piles.length / 3; i < piles.length; i += 2) {
		sum += piles[i];
	}

	return sum;
};
