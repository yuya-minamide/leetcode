/**
 * URL of this problem
 * https://leetcode.com/problems/find-common-characters/
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
	let copyedWords = [...words];
	const Result = [];
	const Char = copyedWords[0].split("");

	for (let i = 0; i < Char.length; i++) {
		if (copyedWords.every((word) => word.includes(Char[i]))) {
			Result.push(Char[i]);
			copyedWords = copyedWords.map((char) => char.replace(Char[i], ""));
		}
	}

	return Result;
};
