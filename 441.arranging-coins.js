/**
 * URL of this problem
 * https://leetcode.com/problems/arranging-coins/
 */

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
	if (n === 1) return 1;

	let line = 0;
	let blockCount = 1;

	while (n >= blockCount) {
		line++;
		n = n - blockCount;
		blockCount++;
	}

	return line;
};
