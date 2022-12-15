/**
 * URL of this problem
 * https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/
 */

/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function (strs) {
	let counter = 0;

	for (let i = 0; i < strs.length; i++) {
		if (Number(strs[i]) || Number(strs[i]) === 0) {
			if (Number(strs[i]) > counter) counter = Number(strs[i]);
		} else if (strs[i].length > counter) {
			counter = strs[i].length;
		}
	}

	return counter;
};
