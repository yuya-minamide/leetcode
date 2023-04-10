/**
 * URL of this problem
 * https://leetcode.com/problems/number-of-different-integers-in-a-string/
 */

/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function (word) {
	const NumArr = word.split(/[a-z]+/);
	const Result = new Set();

	for (let i = 0; i < NumArr.length; i++) {
		if (NumArr[i] !== "") Result.add(BigInt(NumArr[i]));
	}

	return Result.size;
};
