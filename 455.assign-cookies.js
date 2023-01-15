/**
 * URL of this problem
 * https://leetcode.com/problems/assign-cookies/
 */

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
	let result = 0;
	const kids = g.sort((a, b) => a - b);
	const cookies = s.sort((a, b) => a - b);
	let kidsCounter = 0;

	for (let i = 0; i < cookies.length; i++) {
		if (kids[kidsCounter] <= cookies[i]) {
			result++;
			kidsCounter++;
		}
	}

	return result;
};
