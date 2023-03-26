/**
 * URL of this problem
 * https://leetcode.com/problems/top-k-frequent-elements/
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
	const NumMap = new Map();

	for (let i = 0; i < nums.length; i++) {
		NumMap.set(nums[i], (NumMap.get(nums[i]) ?? 0) + 1);
	}

	const sortedValue = Array.from(NumMap.entries()).sort((a, b) => b[1] - a[1]);

	// Return the top k frequent numbers
	return sortedValue.slice(0, k).map((pair) => pair[0]);
};
