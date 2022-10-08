/**
 * URL of this problem
 * https://leetcode.com/problems/minimum-time-visiting-all-points/
 */

/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {

    let counter = 0;

    for (let i = 0; i < points.length - 1; i++) {
        let xLine = Math.abs(points[i][0] - points[i + 1][0]);
        let yLine = Math.abs(points[i][1] - points[i + 1][1]);
        counter = counter + Math.max(xLine, yLine);   
    }

    return counter;
};