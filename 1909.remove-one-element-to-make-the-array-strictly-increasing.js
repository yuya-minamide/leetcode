/**
 * URL of this problem
 * https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function(nums) {
    const numsArr = [...nums];
    for (let i = 0; i < numsArr.length; i++) {
        
        if (numsArr[i] >= numsArr[i + 1]) {
            
            if (numsArr[i] < numsArr[i + 2]) {
                numsArr.splice(i + 1 , 1);
                break;
            }
            
            //Remove the last number in array if the last number in array is less than the previous number
            if (numsArr[i + 2] === undefined) {
                numsArr.splice(i + 1 , 1);
                break;
            }
            
            numsArr.splice(i , 1);
            break;
        }
    }
    
    for (let j = 0; j < numsArr.length; j++) {
        if (numsArr[j] >= numsArr[j + 1]) return false;
    }
    
    return true;
};