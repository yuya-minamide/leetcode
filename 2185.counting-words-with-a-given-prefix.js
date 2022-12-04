/**
 * URL of this problem
 * https://leetcode.com/problems/counting-words-with-a-given-prefix/
 */

/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
	let counter = 0;

	for (let i = 0; i < words.length; i++) {
		if (words[i].includes(pref)) {
			// If words[i] starts with pref, do counter++
			if (words[i].substring(0, pref.length) === pref) counter++;
		}
	}

	return counter;
};
