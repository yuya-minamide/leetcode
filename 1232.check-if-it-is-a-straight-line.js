/**
 * URL of this problem
 * https://leetcode.com/problems/check-if-it-is-a-straight-line/
 */

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
	if (coordinates.length === 2) return true;

	for (let i = 0; i < coordinates.length - 2; i++) {
		if (
			(coordinates[i + 2][1] - coordinates[i + 1][1]) * (coordinates[i + 1][0] - coordinates[i][0]) !==
			(coordinates[i + 1][1] - coordinates[i][1]) * (coordinates[i + 2][0] - coordinates[i + 1][0])
		)
			return false;
	}

	return true;
};
