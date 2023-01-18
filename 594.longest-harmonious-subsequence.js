/**
 * URL of this problem
 * https://leetcode.com/problems/longest-harmonious-subsequence/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
	const NumMap = new Map();
	let result = 0;

	nums.forEach((num) => {
		NumMap.set(num, (NumMap.get(num) ?? 0) + 1);
	});

	NumMap.forEach((value, key) => {
		const Min = NumMap.get(key - 1);
		if (Min) {
			result = Math.max(result, value + Min);
		}
	});

	return result;
};
