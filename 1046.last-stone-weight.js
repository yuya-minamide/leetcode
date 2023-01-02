/**
 * URL of this problem
 * https://leetcode.com/problems/last-stone-weight/
 */

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
	const Result = [...stones];

	while (Result.length > 1) {
		Result.sort((a, b) => b - a);
		Result.push(Result[0] - Result[1]);
		Result.splice(0, 2);
	}

	return Result;
};
