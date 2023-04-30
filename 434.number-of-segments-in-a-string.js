/**
 * URL of this problem
 * https://leetcode.com/problems/number-of-segments-in-a-string/
 */

/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
	const WordsArr = s.split(" ").filter((word) => word !== "");

	return WordsArr.length;
};
