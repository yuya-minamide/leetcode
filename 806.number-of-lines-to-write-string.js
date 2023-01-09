/**
 * URL of this problem
 * https://leetcode.com/problems/number-of-lines-to-write-string/
 */

/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
	let pixels = 0;
	let line = 1;
	const aOfCharCode = 97;

	for (let i = 0; i < s.length; i++) {
		pixels += widths[s[i].charCodeAt() - aOfCharCode];
		if (pixels > 100) {
			pixels = widths[s[i].charCodeAt() - aOfCharCode];
			line++;
		}
	}

	return [line, pixels];
};
