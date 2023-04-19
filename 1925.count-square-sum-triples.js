/**
 * URL of this problem
 * https://leetcode.com/problems/count-square-sum-triples/
 */

/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function (n) {
	let counter = 0;

	for (let a = 1; a <= n; a++) {
		for (let b = 1; b <= n; b++) {
			for (let c = 1; c <= n; c++) {
				if (a * a + b * b === c * c) counter++;
			}
		}
	}
	return counter;
};
