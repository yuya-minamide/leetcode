/**
 * URL of this problem
 * https://leetcode.com/problems/keyboard-row/
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
	const FirstLineOfChar = /[qwertyuiop]/g;
	const SecondLineOfChar = /[asdfghjkl]/g;
	const ThirdLineOfChar = /[zxcvbnm]/g;
	const Result = [];

	for (let i = 0; i < words.length; i++) {
		if (words[i].toLowerCase().match(FirstLineOfChar)?.length === words[i].length) {
			Result.push(words[i]);
			continue;
		}
		if (words[i].toLowerCase().match(SecondLineOfChar)?.length === words[i].length) {
			Result.push(words[i]);
			continue;
		}
		if (words[i].toLowerCase().match(ThirdLineOfChar)?.length === words[i].length) {
			Result.push(words[i]);
			continue;
		}
	}

	return Result;
};
