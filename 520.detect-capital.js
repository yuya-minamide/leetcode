/**
 * URL of this problem
 * https://leetcode.com/problems/detect-capital/
 */

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
	const AllCapitalLetter = word.toUpperCase();
	const AllLowerCaseLetter = word.toLowerCase();
	const FirstCapitalLetter = word.charAt(0).toUpperCase() + AllLowerCaseLetter.slice(1);

	if (AllCapitalLetter === word || AllLowerCaseLetter === word || FirstCapitalLetter === word) return true;

	return false;
};
