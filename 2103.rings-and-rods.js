/**
 * URL of this problem
 * https://leetcode.com/problems/rings-and-rods/
 */

/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function (rings) {
	const Map = {};
	for (let i = 0; i < rings.length; i += 2) {
		Map[rings[i + 1]] += rings[i];
	}

	return Object.values(Map)
		.map((n) => Array.from(new Set(n.slice(9))).join(""))
		.filter((n) => n.length === 3).length;
};
