/**
 * URL of this problem
 * https://leetcode.com/problems/number-of-senior-citizens/
 */

/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
	let numberOfSenior = 0;

	for (let i = 0; i < details.length; i++) {
		const age = details[i].slice(11, 13);
		if (age > 60) numberOfSenior++;
	}

	return numberOfSenior;
};
