/**
 * URL of this problem
 * https://leetcode.com/problems/longest-common-subsequence/
 */

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
	const leng1 = text1.length;
	const leng2 = text2.length;
	const dp = [...new Array(leng1 + 1)].map((ele) => new Array(leng2 + 1).fill(0));

	for (let i = 1; i < leng1 + 1; i++) {
		for (let j = 1; j < leng2 + 1; j++) {
			text1[i - 1] === text2[j - 1] ? (dp[i][j] = dp[i - 1][j - 1] + 1) : (dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]));
		}
	}

	return dp[leng1][leng2];
};
