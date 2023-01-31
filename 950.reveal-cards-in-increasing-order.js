/**
 * URL of this problem
 * https://leetcode.com/problems/reveal-cards-in-increasing-order/
 */

/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
	const SortedNums = deck.sort((a, b) => b - a);
	const Result = [];

	for (let i = 0; i < SortedNums.length; i++) {
		Result.unshift(SortedNums[i]);
		if (i !== SortedNums.length - 1) {
			Result.unshift(Result.pop());
		}
	}

	return Result;
};
