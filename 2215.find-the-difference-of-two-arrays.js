/**
 * URL of this problem
 * https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
	const SetNums1 = new Set(nums1);
	const SetNums2 = new Set(nums2);
	const DifNums1 = new Set([...SetNums1].filter((num) => !SetNums2.has(num)));
	const DifNums2 = new Set([...SetNums2].filter((num) => !SetNums1.has(num)));

	return [[...DifNums1], [...DifNums2]];
};
