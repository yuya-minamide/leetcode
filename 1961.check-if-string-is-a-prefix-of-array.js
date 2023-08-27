/**
 * URL of this problem
 * https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/


/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function (s, words) {
	let tempWord = "";

	for (let i = 0; i < words.length; i++) {
		tempWord += words[i];
		if (tempWord === s) return true;
	}

	return false;
};
