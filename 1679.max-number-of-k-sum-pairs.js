/**
 * URL of this problem
 * https://leetcode.com/problems/max-number-of-k-sum-pairs/
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
	const NumMap = new Map();
	let counter = 0;

	for (let i = 0; i < nums.length; i++) {
		const DifNum = k - nums[i];
		if (NumMap.get(DifNum) !== undefined) {
			if (NumMap.get(DifNum) === 1) NumMap.delete(DifNum);
			else NumMap.set(DifNum, NumMap.get(DifNum) - 1);
			counter++;
		} else {
			NumMap.set(nums[i], NumMap.get(nums[i]) + 1 || 1);
		}
	}

	return counter;
};
