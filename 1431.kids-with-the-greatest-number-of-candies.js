/**
 * URL of this problem
 * https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
 */

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
	const MaxCandies = Math.max(...candies);
	const Result = [];

	for (let i = 0; i < candies.length; i++) {
		Result.push(candies[i] + extraCandies >= MaxCandies);
	}

	return Result;
};
