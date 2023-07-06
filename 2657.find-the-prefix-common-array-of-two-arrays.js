/**
 * URL of this problem
 * https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/
 */

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
	const Result = [];
	const SetNums = new Set();

	for (let i = 0; i < A.length; i++) {
		SetNums.add(A[i]);
		let count = 0;
		for (let j = 0; j <= i; j++) {
			if (SetNums.has(B[j])) {
				count++;
			}
		}
		Result.push(count);
	}

	return Result;
};
