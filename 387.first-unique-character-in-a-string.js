/**
 * URL of this problem
 * https://leetcode.com/problems/first-unique-character-in-a-string/
 */

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
	const SMap = new Map();

	for (let i = 0; i < s.length; i++) {
		!SMap[s[i]] ? (SMap[s[i]] = 1) : SMap[s[i]]++;
	}

	for (let i = 0; i < s.length; i++) {
		if (SMap[s[i]] === 1) return i;
	}

	return -1;
};
