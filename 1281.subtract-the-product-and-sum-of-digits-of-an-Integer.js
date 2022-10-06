/**
 * URL of this problem
 * https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
 */

/**
 * @param {number} n
 * @return {number}
 */

var subtractProductAndSum = function(n) {
    
    let stringNumber = n.toString();
    
    let productNumber = 1;
    let sumNumber = 0;
    
    for (let i = 0; i < stringNumber.length; i++) {
        productNumber = productNumber * Number(stringNumber[i]);
        sumNumber = sumNumber + Number(stringNumber[i]);
    }
    
    return productNumber - sumNumber;
};