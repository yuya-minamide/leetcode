/**
 * URL of this problem
 * https://leetcode.com/problems/convert-the-temperature/
 */

/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
	const Result = [];
	const Index = [];

	for (let i = 0; i < s.length; i++) {
		if (s[i] === c) Index.push(i);
	}

	for (let i = 0; i < s.length; i++) {
		if (s[i] === c) {
			Result.push(0);
		} else {
			let min = s.length;
			for (let j = 0; j < Index.length; j++) {
				min = Math.min(min, Math.abs(i - Index[j]));
			}
			Result.push(min);
		}
	}

	return Result;
};
