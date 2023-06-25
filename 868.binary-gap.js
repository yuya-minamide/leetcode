/**
 * URL of this problem
 * https://leetcode.com/problems/binary-gap/
 */

/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
	const BinaryNArr = n.toString(2).split("");
	let counter = 0;

	for (let i = 0; i < BinaryNArr.length - 1; i++) {
		if (BinaryNArr[i] === "1") {
			for (let j = i + 1; j < BinaryNArr.length; j++) {
				if (BinaryNArr[j] === "1") {
					counter = Math.max(counter, j - i);
					break;
				}
			}
		}
	}

	return counter;
};
