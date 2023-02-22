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

	for (let i = SortedPiles.length / 3; i < SortedPiles.length; i += 2) {
		sum += SortedPiles[i];
	}

	return sum;
};
