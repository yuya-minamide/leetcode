/**
 * URL of this problem
 * https://leetcode.com/problems/determine-the-winner-of-a-bowling-game/
 */

/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function (player1, player2) {
	let totalOf1 = calculator(player1);
	let totalOf2 = calculator(player2);

	if (totalOf1 > totalOf2) return 1;
	if (totalOf1 < totalOf2) return 2;
	return 0;
};

function calculator(nums) {
	let total = 0;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i - 1] === 10 || nums[i - 2] === 10) {
			total += nums[i] * 2;
		} else {
			total += nums[i];
		}
	}

	return total;
}
