/**
 * URL of this problem
 * https://leetcode.com/problems/string-matching-in-an-array/
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
	const Result = [];

	for (let i = 0; i < words.length - 1; i++) {
		for (let j = i + 1; j < words.length; j++) {
			if (words[i].includes(words[j]) && !Result.includes(words[j])) {
				Result.push(words[j]);
			} else if (words[j].includes(words[i]) && !Result.includes(words[i])) {
				Result.push(words[i]);
			}
		}
	}

	return Result;
};
