/**
 * URL of this problem
 * https://leetcode.com/problems/positions-of-large-groups/
 */

/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
	const Result = [];
	let start = 0;

	for (let i = 0; i < s.length; i++) {
		if (s.charAt(i) !== s.charAt(i - 1)) start = i;
		if (s.charAt(i) !== s.charAt(i + 1)) {
			if (i - start >= 2) Result.push([start, i]);
		}
	}

	return Result;
};
