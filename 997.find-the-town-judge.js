/**
 * URL of this problem
 * https://leetcode.com/problems/find-the-town-judge/
 */

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
	if (!trust.length && n <= 1) return n;

	const map1 = {};
	const map2 = {};

	for (let i = 0; i < trust.length; i++) {
		map1[trust[i][0]] = map1[trust[i][0]] + 1 || 1;
		map2[trust[i][1]] = map2[trust[i][1]] + 1 || 1;
	}

	for (let i = 1; i <= n; i++) {
		if (map2[i] === n - 1 && map1[i] === undefined) {
			return i;
		}
	}

	return -1;
};
