/**
 * URL of this problem
 * https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/
 */

/**
 * @param {number} num
 * @return {number}
 */
var largestInteger = function (num) {
	let result = "";

	// Sort even and odd numbers in descending order
	const NumArr = String(num).split("");
	const EvenArr = NumArr.filter((i) => i % 2 === 0).sort((a, b) => b - a);
	const OddArr = NumArr.filter((i) => i % 2 !== 0).sort((a, b) => b - a);

	// Determine if target number is even or odd and add descending numbers to result
	for (let i = 0; i < NumArr.length; i++) {
		if (NumArr[i] % 2) {
			result += OddArr.shift();
		} else {
			result += EvenArr.shift();
		}
	}

	return result;
};
