/**
 * URL of this problem
 * https://leetcode.com/problems/truncate-sentence/
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
	const WordArr = s.split(" ");
	return WordArr.slice(0, k).toString().replaceAll(",", " ");
};
