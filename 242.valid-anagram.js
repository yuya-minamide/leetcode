/**
 * URL of this problem
 * https://leetcode.com/problems/valid-anagram/
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
	const SortedS = s.split("").sort().join("");
	const SortedT = t.split("").sort().join("");

	return SortedS === SortedT;
};
