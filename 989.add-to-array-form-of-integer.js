/**
 * URL of this problem
 * https://leetcode.com/problems/add-to-array-form-of-integer/
 */

/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
	const Sum = BigInt(num.join("")) + BigInt(k);
	return Sum.toString().split("");
};
