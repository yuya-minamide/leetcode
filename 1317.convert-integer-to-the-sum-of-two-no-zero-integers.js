/**
 * URL of this problem
 * https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/
 */

/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function (n) {
	for (let i = 1; i < n; i++) {
		for (let j = n - 1; j > 0; j--) {
			if (i + j === n && !i.toString().includes("0") && !j.toString().includes("0")) return [i, j];
		}
	}
};
