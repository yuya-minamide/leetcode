/**
 * URL of this problem
 * https://leetcode.com/problems/finding-3-digit-even-numbers/
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function (digits) {
	if (digits.length < 3) return [];

	const OddNums = digits.filter((num) => num % 2 === 1);
	if (digits.length === OddNums.length) return [];

	const Result = [];
	for (let i = 0; i < digits.length; i++) {
		for (let j = 0; j < digits.length; j++) {
			for (let k = 0; k < digits.length; k++) {
				if (digits[i] !== 0 && digits[k] % 2 === 0 && i !== j && i !== k && j !== k) {
					Result.push(digits[i] * 100 + digits[j] * 10 + digits[k]);
				}
			}
		}
	}

	return [...new Set(Result.sort((a, b) => a - b))];
};
