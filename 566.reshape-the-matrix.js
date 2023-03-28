/**
 * URL of this problem
 * https://leetcode.com/problems/reshape-the-matrix/
 */

/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
	const FlatMat = mat.flat();
	const ReshapedArr = [];

	if (FlatMat.length !== r * c) return mat;

	for (let i = 0; i < FlatMat.length; i += c) {
		const RowNum = FlatMat.slice(i, i + c);
		ReshapedArr.push(RowNum);
	}

	return ReshapedArr;
};
