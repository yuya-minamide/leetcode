/**
 * URL of this problem
 * https://leetcode.com/problems/intersection-of-multiple-arrays/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
	const NumMap = new Map();

	for (i = 0; i < nums.length; i++) {
		NumMap.set(nums[i], (NumMap.get(nums[i]) ?? 0) + 1);
	}

	nums.sort((a, b) => NumMap.get(a) - NumMap.get(b) || b - a);

	return nums;
};
