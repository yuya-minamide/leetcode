/**
 * URL of this problem
 * https://leetcode.com/problems/best-poker-hand/
 */

/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function (ranks, suits) {
	if (new Set(suits).size === 1) return "Flush";

	const RanksMap = new Map();
	for (i = 0; i < ranks.length; i++) {
		RanksMap.set(ranks[i], (RanksMap.get(ranks[i]) ?? 0) + 1);
	}
	let temp = "";
	RanksMap.forEach((value) => {
		if (value > 2) temp = "Three of a Kind";
	});
	if (temp !== "") return temp;

	if (new Set(ranks).size < 5) return "Pair";

	return "High Card";
};
