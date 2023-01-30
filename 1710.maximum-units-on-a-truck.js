/**
 * URL of this problem
 * https://leetcode.com/problems/maximum-units-on-a-truck/
 */

/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
	const SortedBoxTypes = boxTypes.sort((a, b) => b[1] - a[1]);
	let Result = 0;

	let i = 0;
	while (truckSize > 0) {
		SortedBoxTypes[i][0]--;
		Result += SortedBoxTypes[i][1];
		if (SortedBoxTypes[i][0] === 0) i++;
		truckSize--;
		if (i === SortedBoxTypes.length) break;
	}

	return Result;
};
