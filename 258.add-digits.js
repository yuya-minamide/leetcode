/**
 * URL of this problem
 * https://leetcode.com/problems/add-digits/
 */

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
	let numArr = num.toString().split("");

	while (numArr.length > 1) {
		const sum = numArr.reduce((a, b) => Number(a) + Number(b), 0);
		numArr = sum.toString().split("");
	}

	return Number(numArr[0]);
};
