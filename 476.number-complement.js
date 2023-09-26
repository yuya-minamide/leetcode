/**
 * URL of this problem
 * https://leetcode.com/problems/number-complement/
 */

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
	const NumArr = num.toString(2).split("");

	for (let i = 0; i < NumArr.length; i++) {
		NumArr[i] === "0" ? (NumArr[i] = "1") : (NumArr[i] = "0");
	}

	return parseInt(NumArr.join(""), 2);
};
