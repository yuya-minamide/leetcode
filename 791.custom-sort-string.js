/**
 * URL of this problem
 * https://leetcode.com/problems/custom-sort-string/
 */

/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
	const sArr = s.split("");
	const temArr = [];

	for (let i = 0; i < order.length; i++) {
		for (let j = 0; j < s.length; j++) {
			if (order[i] === s[j]) temArr.push(order[i]);
		}
	}

	const uniqueChar = sArr.filter((item) => {
		return !temArr.includes(item);
	});

	return temArr.concat(...uniqueChar).join("");
};
