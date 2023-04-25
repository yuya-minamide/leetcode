/**
 * URL of this problem
 * https://leetcode.com/problems/largest-substring-between-two-equal-characters/
 */

/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
	let largestSubStr = -1;

	for (let i = 0; i < s.length - 1; i++) {
		for (let j = i + 1; j < s.length; j++) {
			if (s[i] === s[j]) largestSubStr = Math.max(largestSubStr, s.slice(i + 1, j).length);
		}
	}

	return largestSubStr;
};
