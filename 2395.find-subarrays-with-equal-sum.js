/**
 * URL of this problem
 * https://leetcode.com/problems/find-subarrays-with-equal-sum/
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function (nums) {
	const SetNum = new Set();

	for (let i = 0; i < nums.length - 1; i++) {
		const Sum = nums[i] + nums[i + 1];
		if (SetNum.has(Sum)) return true;
		SetNum.add(Sum);
	}

	return false;
};
