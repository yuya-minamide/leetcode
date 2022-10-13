/**
 * URL of this problem
 * https://leetcode.com/problems/decompress-run-length-encoded-list/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let result = [];
    for (let i = 0; i < nums.length; i = i + 2) {
        let freq = nums[i];
        let val = nums[i + 1];
        while (freq !== 0) {
            result.push(val);
            freq--;
        }
    }
    return result;
};
