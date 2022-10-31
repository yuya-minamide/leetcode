/**
 * URL of this problem
 * https://leetcode.com/problems/sorting-the-sentence/
 */

/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    //Sort words by number order
    let sortedS = s.split(" ").sort((a,b) => a[a.length - 1] - b[b.length - 1]);
    let result = [];
    
    //Cut out the numbers
    for (let i = 0; i < sortedS.length; i++) {
        result.push(sortedS[i].slice(0, sortedS[i].length - 1));
    }
    
    return result.join(" ")
};