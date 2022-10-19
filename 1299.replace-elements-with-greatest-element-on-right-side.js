/**
 * URL of this problem
 * https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/
 */

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    const outputArr = [];

    for (let i = 0; i < arr.length; i++) {
        outputArr.push(Math.max(...arr.slice(i + 1)));
    }

    outputArr[outputArr.length - 1] = -1;

    return outputArr;
};