/**
 * URL of this problem
 * https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/
 */

/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
	const ConcatedArr = nums1.concat(nums2).sort((a, b) => a[0] - b[0]);
	const SumMap = new Map();

	for (let i = 0; i < ConcatedArr.length; i++) {
		const Key = ConcatedArr[i][0];
		const Value = ConcatedArr[i][1];
		SumMap.set(Key, SumMap.has(Key) ? SumMap.get(Key) + Value : Value);
	}

	return [...SumMap.entries()];
};
