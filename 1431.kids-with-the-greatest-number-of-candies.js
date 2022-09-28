/**
 * URL of this problem
 * https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
 */

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let maxNumber = Math.max(...candies);
    return candies.map(item => item + extraCandies >= maxNumber);
};
