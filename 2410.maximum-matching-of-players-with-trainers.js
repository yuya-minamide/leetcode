/**
 * URL of this problem
 * https://leetcode.com/problems/maximum-matching-of-players-with-trainers/
 */

/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function (players, trainers) {
	const sortedPlayers = players.sort((a, b) => a - b);
	const sortedTrainers = trainers.sort((a, b) => a - b);
	let counter = 0;

	for (let i = 0; i < sortedTrainers.length; i++) {
		if (sortedPlayers[counter] <= sortedTrainers[i]) counter++;
	}

	return counter;
};
