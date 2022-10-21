/**
 * URL of this problem
 * https://leetcode.com/problems/two-furthest-houses-with-different-colors/
 */

/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
var convertTime = function(current, correct) {
    
    //Converted to minutes
    const currentTime = Number(current.slice(0, 2)) * 60 + Number(current.slice(3));
    const correctTime = Number(correct.slice(0, 2)) * 60 + Number(correct.slice(3));
    
    let timeLag = correctTime -currentTime;
    
    let counter = 0;    
    while (timeLag !== 0) {
        if (timeLag % 60 === 0) {
            timeLag -= 60;
            counter++
        } else if (timeLag % 15 === 0) {
            timeLag -= 15;
            counter++
        } else if (timeLag % 5 === 0) {
            timeLag -= 5;
            counter++
        } else if (timeLag % 1 === 0) {
            timeLag -= 1;
            counter++
        }
    }
    
    return counter;
};