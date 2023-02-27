/**
 * URL of this problem
 * https://leetcode.com/problems/shuffle-string/
 */

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
	const CharMap = new Map();
	const Result = [];

	for (let i = 0; i < indices.length; i++) {
		CharMap.set(indices[i], s[i]);
	}

	for (let i = 0; i < indices.length; i++) {
		Result.push(CharMap.get(i));
	}

	return Result.join("");
};
