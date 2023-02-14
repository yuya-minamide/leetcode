/**
 * URL of this problem
 * https://leetcode.com/problems/minimum-common-value/
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function (nums1, nums2) {
	for (let i = 0; i < nums1.length; i++) {
		for (let j = 0; j < nums2.length; j++) {
			if (nums1[i] === nums2[j]) return nums1[i];
		}
	}

	return -1;
};
