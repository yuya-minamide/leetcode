/**
 * URL of this problem
 * https://leetcode.com/problems/xor-operation-in-an-array/
 */

/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    
    let bitwiseXor = 0;
    
    for (let i = 0; i < n; i++) {
        bitwiseXor = bitwiseXor ^ start + i * 2;
    }
    
    return bitwiseXor;
};