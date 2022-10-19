/**
 * URL of this problem
 * https://leetcode.com/problems/minimum-absolute-difference/
 */

/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    
    const sortArr = arr.sort((a, b) => a - b);
    
    const result = [];
    
    let smallestDifNum = Infinity;
    
    //find the smallest difference number
    for (let i = 0; i < sortArr.length; i++) {
        if (sortArr[i] - sortArr[i + 1] < smallestDifNum) {
            smallestDifNum = Math.min(smallestDifNum, sortArr[i + 1] - arr[i]);
        }
    } 
    
    //find pairs with the same difference number
    for (let i = 0; i < sortArr.length; i++) {
        if (sortArr[i + 1] - sortArr[i] === smallestDifNum) result.push([arr[i], arr[i + 1]]);
    }
    
    return result;
};