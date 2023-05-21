/**
 * URL of this problem
 * https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
	for (let i = 0; i < haystack.length; i++) {
		const temp = haystack.slice(i, i + needle.length);

		if (temp === needle) return i;
	}

	return -1;
};
