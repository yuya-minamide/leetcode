/**
 * URL of this problem
 * https://leetcode.com/problems/length-of-last-word/
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
	const WordsArr = s.trim().split(" ");
	return WordsArr[WordsArr.length - 1].length;
};
