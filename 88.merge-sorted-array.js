/**
 * URL of this problem
 * https://leetcode.com/problems/merge-sorted-array/
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

    //Replace after index[m] of nums1 with nums2
    nums1.splice(m, n, ...nums2);
    nums1.sort((a, b) => a - b);
};