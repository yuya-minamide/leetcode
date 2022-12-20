/**
 * URL of this problem
 * https://leetcode.com/problems/keyboard-row/
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
	const FirstLineOfArr = /[qwertyuiop]/g;
	const SecondLineOfArr = /[asdfghjkl]/g;
	const ThirdLineOfArr = /[zxcvbnm]/g;
	const Result = [];

	for (let i = 0; i < words.length; i++) {
		if (words[i].toLowerCase().match(FirstLineOfArr)?.length === words[i].length) {
			Result.push(words[i]);
			continue;
		}
		if (words[i].toLowerCase().match(SecondLineOfArr)?.length === words[i].length) {
			Result.push(words[i]);
			continue;
		}
		if (words[i].toLowerCase().match(ThirdLineOfArr)?.length === words[i].length) {
			Result.push(words[i]);
			continue;
		}
	}

	return Result;
};
