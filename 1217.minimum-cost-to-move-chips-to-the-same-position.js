/**
 * URL of this problem
 * https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/
 */

/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
    let oddChips = position.filter(a => a % 2 !== 0);
        oddChips = oddChips.length;
    const evenChips = position.length - oddChips;
    return Math.min(oddChips, evenChips);
};