/**
 * URL of this problem
 * https://leetcode.com/problems/relative-sort-array/
 */

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let result = [];
    
    for (i = 0; i < arr2.length; i++) {
        //Find the same number as array2[i] from array1 and connect it with result
        result = result.concat(arr1.filter((a) => a === arr2[i]));
        //Delete already connected number
        arr1 = arr1.filter((a) => a !== arr2[i]);
    }
    
    return result.concat(arr1.sort((a, b) => a - b));
};