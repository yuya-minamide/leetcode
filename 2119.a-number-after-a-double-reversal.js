/**
 * URL of this problem
 * https://leetcode.com/problems/a-number-after-a-double-reversal/
 */

/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function (num) {
	const ReversedNum = num.toString().split("").reverse().join("");
	const RemovedZeroArr = Number(ReversedNum);
	const ReversedNum2 = RemovedZeroArr.toString().split("").reverse().join("");

	return Number(ReversedNum2) === num;
};
