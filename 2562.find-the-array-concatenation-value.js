/**
 * URL of this problem
 * https://leetcode.com/problems/find-the-array-concatenation-value/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function (nums) {
	let copyedNums = [...nums];
	let concatenationValue = 0;

	while (copyedNums.length > 0) {
		if (copyedNums.length === 1) {
			concatenationValue += copyedNums[0];
			copyedNums.shift();
		} else {
			const FirstNum = copyedNums[0].toString();
			const LastNum = copyedNums[copyedNums.length - 1].toString();
			concatenationValue += parseInt(FirstNum + LastNum);
			copyedNums.shift();
			copyedNums.pop();
		}
	}

	return concatenationValue;
};
