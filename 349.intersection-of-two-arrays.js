/**
 * URL of this problem
 * https://leetcode.com/problems/intersection-of-two-arrays/
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    
    //remove same number from each array
    const nums1arr = [...new Set(nums1)];
    const nums2arr = [...new Set(nums2)];
    
    let result = [];
    
    const biggestLength = Math.max(nums1arr.length, nums2arr.length);
    
    for (let i = 0; i < biggestLength; i++) {
        if (nums1arr.includes(nums2arr[i])) result.push(nums2arr[i]);
    }
    
    return result;
};