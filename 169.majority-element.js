/**
 * URL of this problem
 * https://leetcode.com/problems/majority-element/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    //sort in ascending order
    const sortedNums = nums.sort((a, b) => a - b);
    let counter = 1;
    let maxNum = 1;
    const maxNumsArr = [];
    
    for (let i = 0; i < sortedNums.length; i++) {
        sortedNums[i] === sortedNums[i + 1] ? counter++ : counter = 1;
        
        if (maxNum <= counter) {
            maxNum = counter;
            maxNumsArr.unshift(sortedNums[i]);
        }   
    }
    
    return maxNumsArr[0];
};