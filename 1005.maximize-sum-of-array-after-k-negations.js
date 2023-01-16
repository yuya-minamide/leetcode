/**
 * URL of this problem
 * https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
	const numsArr = [...nums];

	let i = 0;
	while (i < k) {
		numsArr.sort((a, b) => a - b);
		numsArr[0] = -numsArr[0];
		i++;
	}

	return numsArr.reduce((acc, cur) => acc + cur, 0);
};
