/**
 * URL of this problem
 * https://leetcode.com/problems/number-of-equivalent-domino-pairs/
 */

/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
	let counter = 0;

	for (i = 0; i < dominoes.length; i++) {
		for (j = i + 1; j < dominoes.length; j++) {
			if (dominoes[i][0] === dominoes[j][0] && dominoes[i][1] === dominoes[j][1]) counter++;
			else if (dominoes[i][1] === dominoes[j][0] && dominoes[i][0] === dominoes[j][1]) counter++;
		}
	}

	return counter;
};
