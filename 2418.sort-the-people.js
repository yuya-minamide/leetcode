/**
 * URL of this problem
 * https://leetcode.com/problems/sort-the-people/
 */

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
	const PeopleMap = new Map();

	for (let i = 0; i < heights.length; i++) {
		PeopleMap.set(heights[i], names[i]);
	}

	const SortedMap = new Map([...PeopleMap.entries()].sort((a, b) => b[0] - a[0]));

	return [...SortedMap.values()];
};
