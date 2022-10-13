/**
 * URL of this problem
 * https://leetcode.com/problems/number-of-good-pairs/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let mini = 0;
    let numberOfPairs = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[mini] == nums[i]) {
            numberOfPairs++
            if (i == nums.length - 1) {
                mini++
                i = mini;
            }
        } else if (i == nums.length - 1) {
            mini++
            i = mini;
        }
    }
    return numberOfPairs;
};