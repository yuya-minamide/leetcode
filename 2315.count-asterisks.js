/**
 * URL of this problem
 * https://leetcode.com/problems/count-asterisks/
 */

/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    //split by |
    const sArr = s.split("|");
    
    let result = 0;
    
    for (let i = 0; i < sArr.length; i++) {
        if (i % 2 === 0) {
            for(let j = 0; j < sArr[i].length; j++) {
                if(sArr[i][j] === "*") result++;
            }
        }
    }
    
    return result;
};