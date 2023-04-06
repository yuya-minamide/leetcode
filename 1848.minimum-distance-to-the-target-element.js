/**
 * URL of this problem
 * https://leetcode.com/problems/minimum-distance-to-the-target-element/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function (nums, target, start) {
	let minAbsVal = Infinity;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === target) {
			const AbsVal = Math.abs(i - start);

			minAbsVal = Math.min(minAbsVal, AbsVal);
		}
	}

	return minAbsVal;
};
