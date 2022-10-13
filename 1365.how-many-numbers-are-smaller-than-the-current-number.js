/**
 * URL of this problem
 * https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var smallerNumbersThanCurrent = function(nums) {
    let arr = [];
    for (i = 0; i < nums.length; i++) {
        let counter = 0 
        for (j = 0; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                counter++;
            }  
        }
        arr[i] = counter
    }
    return (arr)
};