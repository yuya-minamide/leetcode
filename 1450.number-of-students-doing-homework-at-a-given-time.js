/**
 * URL of this problem
 * https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/
 */

/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function(startTime, endTime, queryTime) {
    
    let NumberOfStudents = 0;
    
    for (i = 0; i < startTime.length; i++) {
        if (startTime[i] <= queryTime && endTime[i] >= queryTime) {
            NumberOfStudents++
        }
    }
    
    return NumberOfStudents;
};