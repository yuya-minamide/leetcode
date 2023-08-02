/**
 * URL of this problem
 * https://leetcode.com/problems/find-players-with-zero-or-one-losses/
 */

/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
	const NoLoss = [];
	const OneLoss = [];
	const lossTracker = [];

	for (let i = 0; i < matches.length; i++) {
		lossTracker[matches[i][0]] = lossTracker[matches[i][0]] ? lossTracker[matches[i][0]] : 0;
		lossTracker[matches[i][1]] = lossTracker[matches[i][1]] ? lossTracker[matches[i][1]] + 1 : 1;
	}

	for (const [key, value] of Object.entries(lossTracker)) {
		if (value === 1) OneLoss.push(key);
		if (value === 0) NoLoss.push(key);
	}

	return [NoLoss, OneLoss];
};
