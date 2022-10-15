/**
 * URL of this problem
 * https://leetcode.com/problems/two-out-of-three/
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    //remove common numbers
    const uniqueNums1 = [...new Set(nums1)];
    const uniqueNums2 = [...new Set(nums2)];
    const uniqueNums3 = [...new Set(nums3)];
    
    let result = [];
    
    //pick up common number from other array
    const maxLength = Math.max(uniqueNums1.length, uniqueNums2.length, uniqueNums3.length)
    for (let i = 0; i < maxLength; i++) {
        if (uniqueNums2.includes(uniqueNums1[i]) || uniqueNums3.includes(uniqueNums1[i])) result.push(uniqueNums1[i]);
        if (uniqueNums1.includes(uniqueNums2[i]) || uniqueNums3.includes(uniqueNums2[i])) result.push(uniqueNums2[i]);
        if (uniqueNums1.includes(uniqueNums3[i]) || uniqueNums2.includes(uniqueNums3[i])) result.push(uniqueNums3[i]);        
    }
    
    return [...new Set(result)];
};