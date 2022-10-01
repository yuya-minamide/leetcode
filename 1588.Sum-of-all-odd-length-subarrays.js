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
            
            let target = (arr.slice(i, j + 1));
            
            if (target.length % 2 !== 0) {                
                let targetTotall = target.reduce((previousValue , currentValue) => previousValue  + currentValue, 0);                
                totalNumber = totalNumber + targetTotall;
            }
        }
    }
    return totalNumber;   
};