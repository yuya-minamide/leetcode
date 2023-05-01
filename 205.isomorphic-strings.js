/**
 * URL of this problem
 * https://leetcode.com/problems/isomorphic-strings/
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
	for (let i = 0; i < s.length; i++) {
		for (let j = 0; j < s.length; j++) {
			if ((t[i] === t[j] && s[i] !== s[j]) || (s[i] === s[j] && t[i] !== t[j])) {
				return false;
			}
		}
	}

	return true;
};
