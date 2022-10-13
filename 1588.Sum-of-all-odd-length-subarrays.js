/**
 * URL of this problem
 * https://leetcode.com/problems/sum-of-all-odd-length-subarrays/
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {   
    let totalNumber = 0;
    
    for (let i = 0; i <= arr.length - 1; i++) {
        for (let j = arr.length - 1; j >= i; j--) {
            let oddLengArr = (arr.slice(i, j + 1));
            
            if (oddLengArr.length % 2 !== 0) {
                const oddLengArrTotal = oddLengArr.reduce((sum, curr) => sum + curr, 0);
                totalNumber += oddLengArrTotal;
            }
        }
    }
    
    return totalNumber;   
};