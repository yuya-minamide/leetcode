/**
 * URL of this problem
 * https://leetcode.com/problems/largest-triangle-area/
 */

/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function (points) {
	let maxArea = 0;

	for (let i = 0; i < points.length; i++) {
		for (let j = i + 1; j < points.length; j++) {
			for (let k = j + 1; k < points.length; k++) {
				const area = calculateTriangleArea(points[i], points[j], points[k]);
				maxArea = Math.max(maxArea, area);
			}
		}
	}

	return maxArea;
};

function calculateTriangleArea(pointA, pointB, pointC) {
	const x1 = pointA[0],
		y1 = pointA[1];
	const x2 = pointB[0],
		y2 = pointB[1];
	const x3 = pointC[0],
		y3 = pointC[1];

	return Math.abs(0.5 * (x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)));
}
