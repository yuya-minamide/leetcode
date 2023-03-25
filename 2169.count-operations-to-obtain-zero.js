/**
 * URL of this problem
 * https://leetcode.com/problems/count-operations-to-obtain-zero/
 */

/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function (num1, num2) {
	if (num1 === 0 || num2 === 0) return 0;

	let counter = 0;

	while (num1 > 0) {
		num1 >= num2 ? (num1 -= num2) : (num2 -= num1);
		counter++;
	}

	return counter;
};
