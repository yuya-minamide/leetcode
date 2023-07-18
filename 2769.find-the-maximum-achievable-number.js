/**
 * URL of this problem
 * https://leetcode.com/problems/find-the-maximum-achievable-number/
 */

/**
 * @param {number} num
 * @param {number} t
 * @return {number}
 */
var theMaximumAchievableX = function (num, t) {
	if (t === 1) return num + 2;
	return num + t * 2;
};
