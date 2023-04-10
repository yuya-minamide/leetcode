/**
 * URL of this problem
 * https://leetcode.com/problems/maximum-repeating-substring/
 */

/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function (sequence, word) {
	let concatWord = word;
	let counter = 0;

	while (sequence.includes(concatWord)) {
		concatWord += word;
		counter++;
	}

	return counter;
};
