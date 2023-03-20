/**
 * URL of this problem
 * https://leetcode.com/problems/most-frequent-even-element/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
	const EvenArr = nums.filter((num) => num % 2 === 0);

	if (EvenArr.length === 0) return -1;

	const EvenNumMap = new Map();
	for (let i = 0; i < EvenArr.length; i++) {
		EvenNumMap.set(EvenArr[i], (EvenNumMap.get(EvenArr[i]) || 0) + 1);
	}

	const HighNum = Math.max(...EvenNumMap.values());
	const FreqNums = [];
	EvenNumMap.forEach((value, key) => {
		if (value === HighNum) FreqNums.push(key);
	});

	return Math.min(...FreqNums);
};
