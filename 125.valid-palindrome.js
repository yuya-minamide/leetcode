/**
 * URL of this problem
 * https://leetcode.com/problems/valid-palindrome/
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
	const LowercaseChar = s.toLowerCase().replace(/[^a-z0-9]/gi, "");
	const ReversedChar = LowercaseChar.split("").reverse().join("");
	return LowercaseChar === ReversedChar;
};
