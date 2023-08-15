/**
 * URL of this problem
 * https://leetcode.com/problems/number-of-matching-subsequences/
 */

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */

var numMatchingSubseq = function (s, words) {
	let count = 0;

	for (let i = 0; i < words.length; i++) {
		if (isSubSequence(s, words[i])) count++;
	}

	return count;
};

function isSubSequence(s, t) {
	let seq = 0;

	for (let i = 0; i < s.length; i++) {
		if (seq === t.length) break;
		if (t[seq] === s[i]) seq++;
	}

	return seq === t.length;
}
