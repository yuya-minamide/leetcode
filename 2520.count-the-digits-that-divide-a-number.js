/**
 * URL of this problem
 * https://leetcode.com/problems/count-the-digits-that-divide-a-number/
 */

/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
	const DigitsNums = num.toString().split("");
	return DigitsNums.filter((target) => num % Number(target) === 0).length;
};
