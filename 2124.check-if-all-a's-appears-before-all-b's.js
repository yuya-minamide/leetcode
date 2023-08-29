/**
 * URL of this problem
 * https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function (s) {
	for (let i = 0; i < s.length - 1; i++) {
		if (s[i] === "b" && s[i + 1] === "a") return false;
	}

	return true;
};
