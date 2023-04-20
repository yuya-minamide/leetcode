/**
 * URL of this problem
 * https://leetcode.com/problems/count-square-sum-triples/
 */

/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function (num) {
	const SortedNums = num.toString().split("").sort();
	const EvenIndexNums = [];
	const OddIndexNums = [];

	while (SortedNums.length > 0) {
		EvenIndexNums.push(SortedNums.shift());
		OddIndexNums.push(SortedNums.shift());
	}

	return Number(EvenIndexNums.join("")) + Number(OddIndexNums.join(""));
};
