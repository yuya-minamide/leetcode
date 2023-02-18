/**
 * URL of this problem
 * https://leetcode.com/problems/happy-number/
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
	const SetNums = new Set();

	while (n !== 1) {
		if (SetNums.has(n)) return false;
		SetNums.add(n);
		n = n
			.toString()
			.split("")
			.reduce((acc, cur) => acc + cur * cur, 0);
	}

	return true;
};
