/**
 * URL of this problem
 * https://leetcode.com/problems/decode-xored-array/
 */

/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {
	const Result = [first];

	for (let i = 0; i < encoded.length; i++) {
		Result.push(Result[i] ^ encoded[i]);
	}

	return Result;
};
