/**
 * URL of this problem
 * https://leetcode.com/problems/3sum-closest/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
	nums.sort((a, b) => a - b);
	let sum = null;

	for (let i = 0; i < nums.length - 2; i++) {
		for (let j = i + 1; j < nums.length - 1; j++) {
			for (let k = j + 1; k < nums.length; k++) {
				const TempSum = nums[i] + nums[j] + nums[k];
				if (sum === null) {
					sum = TempSum;
				} else if (Math.abs(TempSum - target) < Math.abs(sum - target)) {
					sum = TempSum;
				} else if (TempSum > sum) {
					break;
				}
			}
		}
	}

	return sum;
};
