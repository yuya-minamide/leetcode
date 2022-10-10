/**
 * URL of this problem
 * https://leetcode.com/problems/find-greatest-common-divisor-of-array/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

//Pick up minimum and maximum number from nums
var findGCD = function(nums) {    
    const miniNumber = Math.min(...nums);
    const maxiNumber = Math.max(...nums);
    
    return pickUpNumber(maxiNumber, miniNumber) 
};


//Pick up greatest common divisor 
const pickUpNumber = function(maxiNumber, miniNumber) {    
    let gcd = 1;
    
    for (let i = miniNumber; i >= 1; i--) {
        if (maxiNumber % i == 0 && miniNumber % i == 0) {
            gcd = Math.max(gcd, i);
        }
    }
    
    return gcd;
};